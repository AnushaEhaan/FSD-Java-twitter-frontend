export interface AuthState {
	user: any;
	loading: boolean;
    error: string | null;
}

export interface AuthAction {
	type: string;
	payload?: any;
}

export const initialState: AuthState = {
	user: null,
    loading: false,
    error: null,
};

export enum AuthActionTypes {
	AUTH_LOGIN_START = 'AUTH_LOGIN_START',
    AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
    AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE',
}
