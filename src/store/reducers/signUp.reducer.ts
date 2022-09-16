import {
	SignUpState,
	SignUpAction,
	SignUpActionTypes,
	initialState,
} from '../../types/store/signUp.store.types'

const signUpReducer = (
	state: SignUpState = initialState,
	action: SignUpAction
): SignUpState => {
	switch (action.type) {
		case SignUpActionTypes.SIGN_UP_START:
			return {
				...state,
				loading: true,
				error: null,
				isSignUp: false,
			}
		case SignUpActionTypes.SIGN_UP_SUCCESS:
			return {
				...state,
				loading: false,
				isSignUp: true,
			}
		case SignUpActionTypes.SIGN_UP_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default signUpReducer
