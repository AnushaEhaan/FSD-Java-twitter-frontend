import { toast } from 'react-toastify'
import axios from '../../config/axios.config'
import {
	UserPeopleAction,
	UserPeopleActionTypes,
} from '../../types/store/userPeople.store.types'

const getUserPeopleStart = (): UserPeopleAction => ({
	type: UserPeopleActionTypes.GET_USER_PEOPLE_START,
})

const getUserPeopleSuccess = (payload: any[]): UserPeopleAction => ({
	type: UserPeopleActionTypes.GET_USER_PEOPLE_SUCCESS,
	payload,
})

const getUserPeopleFailure = (error: string): UserPeopleAction => ({
	type: UserPeopleActionTypes.GET_USER_PEOPLE_FAILURE,
	payload: error,
})

export const setuserPeople = (payload: any): UserPeopleAction => ({
	type: UserPeopleActionTypes.SET_USER_PEOPLE,
	payload,
})

export const clearUserPeopleList = (): UserPeopleAction => ({
	type: UserPeopleActionTypes.CLEAR_USER_PEOPLE,
})

export const getUserPeople =
	(userId: string, type: string, page: number, limit: number) =>
	async (dispatch: any) => {
		dispatch(getUserPeopleStart())
		try {
			const response = await axios.get(
				`/user/getUserFollowersOrFollowing/${userId}/${type}?page=${page}&limit=${limit}`
			)
			dispatch(getUserPeopleSuccess(response.data.users))
			console.log(response.data)
		} catch (error: any) {
			dispatch(getUserPeopleFailure(error.response.data.error))
			toast.error(error.response.data.error)
		}
	}
