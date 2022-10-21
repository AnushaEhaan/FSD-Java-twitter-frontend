import {
	UpdateUserActionTypes,
	UpdateUserAction,
} from '../../types/store/updateUser.type'
import axios from '../../config/axios.config'
import { toast } from 'react-toastify'
import store from '../store'
import { setProfileUser } from './profileInfo.action'
import Cookies from 'js-cookie'

export const updateUserStart = (): UpdateUserAction => ({
	type: UpdateUserActionTypes.UPDATE_USER_START,
})

const updateUserSuccess = (): UpdateUserAction => ({
	type: UpdateUserActionTypes.UPDATE_USER_SUCCESS,
})

const updateUserFailure = (error: string): UpdateUserAction => ({
	type: UpdateUserActionTypes.UPDATE_USER_FAILURE,
	payload: error,
})

export const uploadAvatar = async (image: any) => {
	try {
		const formData = new FormData()
		formData.append('image', image)
		const response = await axios.post(
			'/user/uploadAvatarOrCover',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		)

		const data = await response.data
		return data
	} catch (error) {
		return error
	}
}

export const updateUser = (form: any) => async (dispatch: any) => {
	dispatch(updateUserStart())
	try {
		const userId = Cookies.get('user_Id')
		const formData: any = {}
		Object.keys(form).forEach((key) => {
			if (form[key]) {
				formData[key] = form[key]
			}
		})
		const response = await axios.put(`/user/updateUser/${userId}`, formData)
		const data = await response.data
		if (data.status === 200) {
			dispatch(updateUserSuccess())
			dispatch(setProfileUser(data.user))
			toast.success(data.message)
		}
	} catch (error: any) {
		const message = error?.response?.data?.message
		dispatch(updateUserFailure(message))
		toast.error(message)
	}
}
