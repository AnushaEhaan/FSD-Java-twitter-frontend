import {
	UserState,
	UserAction,
	UserActionTypes,
	initialState,
} from '../../types/store/user.store.types'

const userReducer = (
	state: UserState = initialState,
	action: UserAction
): UserState => {
	switch (action.type) {
		case UserActionTypes.USER_LOGIN_START:
			return {
				...state,
				loading: true,
				error: null,
				currentUser: null,
				isAuthenticated: false,
			}
		case UserActionTypes.USER_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				currentUser: action.payload,
				isAuthenticated: true,
			}
		case UserActionTypes.USER_LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				isAuthenticated: false,
				currentUser: null,
			}
		case UserActionTypes.USER_LOGOUT:
			return {
				...state,
				loading: false,
				error: null,
				currentUser: null,
				isAuthenticated: false,
			}

		case UserActionTypes.SET_USER_USER:
			return {
				...state,
				currentUser: action.payload,
			}

		default:
			return state
	}
}

export default userReducer
