import {
	SignUpActionTypes,
	SignUpAction,
} from '../../types/store/signUp.store.types'
import axios from '../../config/axios.config'
import { toast } from 'react-toastify'

const signUpStart = (): SignUpAction => ({
	type: SignUpActionTypes.SIGN_UP_START,
})

const signUpSuccess = (): SignUpAction => ({
	type: SignUpActionTypes.SIGN_UP_SUCCESS,
})

const signUpFailure = (error: any): SignUpAction => ({
	type: SignUpActionTypes.SIGN_UP_FAILURE,
	payload: error,
})

export const signUp = (form: any) => async (dispatch: any) => {
	dispatch(signUpStart())
	try {
		const response = await axios.post('/auth/signup', JSON.stringify(form))
		const data = await response.data
		data && dispatch(signUpSuccess())
		toast.success('User created successfully')
		return data
	} catch (error: any) {
		const message = error?.response?.data?.message
		dispatch(signUpFailure(message))
		toast.error(message)
	}
}
