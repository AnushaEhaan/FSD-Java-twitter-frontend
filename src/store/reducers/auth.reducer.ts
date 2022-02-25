import {
	AuthState,
	AuthAction,
	AuthActionTypes,
	initialState,
} from '../../interfaces/store/auth.store.types';

const authReducer = (
	state: AuthState = initialState,
	action: AuthAction,
): AuthState => {
	switch (action.type) {
		case AuthActionTypes.AUTH_LOGIN_START:
			return {
				...state,
				loading: true,
				error: null,
				user: null,
				isAuthenticated: false,
			};
		case AuthActionTypes.AUTH_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				user: action.payload,
				isAuthenticated: true,
			};
		case AuthActionTypes.AUTH_LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				isAuthenticated: false,
				user: null,
			};
		case AuthActionTypes.AUTH_LOGOUT:
			return {
				...state,
				loading: false,
				error: null,
				user: null,
				isAuthenticated: false,
			};
	
		default:
			return state;
	}
};

export default authReducer;