import Cookies from 'js-cookie'
import axios from '../../config/axios.config'
import {
	SuggestedUsersAction,
	SuggestedUsersActionTypes,
} from '../../types/store/suggestedUsers.store.type'
import { IUser } from '../../types/user.type'

const getSuggestedUsersStart = (): SuggestedUsersAction => ({
	type: SuggestedUsersActionTypes.SUGGESTED_USERS_START,
})

const getSuggestedUsersSuccess = (
	suggestedUsers: IUser[]
): SuggestedUsersAction => ({
	type: SuggestedUsersActionTypes.SUGGESTED_USERS_SUCCESS,
	payload: suggestedUsers,
})

const getSuggestedUsersFailure = (error: any): SuggestedUsersAction => ({
	type: SuggestedUsersActionTypes.SUGGESTED_USERS_FAILURE,
	payload: error,
})

export const setSuggestedUsers = (
	suggestedUser: IUser[]
): SuggestedUsersAction => ({
	type: SuggestedUsersActionTypes.SET_SUGGESTED_USER,
	payload: suggestedUser,
})

export const getSuggestedUsers =
	(limit: number, page: number) => async (dispatch: any) => {
		dispatch(getSuggestedUsersStart())
		const userId = Cookies.get('user_Id')
		try {
			const response = await axios.get(
				`/user/suggestedUsers/${userId}?page=${page}&limit=${limit}`
			)
			const data = await response.data
			dispatch(getSuggestedUsersSuccess(data.users))
			return true
		} catch (error: any) {
			const message = error?.response?.data?.message
			dispatch(getSuggestedUsersFailure(message))
			return false
		}
	}
