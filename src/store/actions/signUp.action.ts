import {
	SignUpActionTypes,
	SignUpAction,
} from '../../types/store/signUp.store.type'
import axios from '../../config/axios.config'
import { toast } from 'react-toastify'
import { ISignup } from '../../types/singup.type'

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

export const signUp = (form: ISignup) => async (dispatch: any) => {
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
