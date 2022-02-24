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
			};
		default:
			return state;
	}
};

export default authReducer;