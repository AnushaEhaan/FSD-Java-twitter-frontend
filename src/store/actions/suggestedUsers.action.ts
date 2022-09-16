import {
	SuggestedUsersAction,
	SuggestedUsersActionTypes,
} from '../../types/store/suggestedUsers.store.types'
import axios from '../../config/axios.config'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

const getSuggestedUsersStart = (): SuggestedUsersAction => ({
	type: SuggestedUsersActionTypes.SUGGESTED_USERS_START,
})

const getSuggestedUsersSuccess = (
	suggestedUsers: any
): SuggestedUsersAction => ({
	type: SuggestedUsersActionTypes.SUGGESTED_USERS_SUCCESS,
	payload: suggestedUsers,
})

const getSuggestedUsersFailure = (error: any): SuggestedUsersAction => ({
	type: SuggestedUsersActionTypes.SUGGESTED_USERS_FAILURE,
	payload: error,
})

export const setSuggestedUsers = (
	suggestedUser: any
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
