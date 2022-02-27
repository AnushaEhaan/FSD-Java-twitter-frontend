export interface AuthState {
	user: any;
	loading: boolean;
    error: string | null;
	isAuthenticated: boolean;
}

export interface AuthAction {
	type: string;
	payload?: any;
}

export const initialState: AuthState = {
	user: null,
    loading: false,
    error: null,
	isAuthenticated: false
};

export enum AuthActionTypes {
	AUTH_LOGIN_START = 'AUTH_LOGIN_START',
	AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
	AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE',
	AUTH_LOGOUT = 'AUTH_LOGOUT',
	SET_AUTH_USER = 'SET_AUTH_USER',
}
