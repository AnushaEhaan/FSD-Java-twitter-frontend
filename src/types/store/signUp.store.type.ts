export interface SignUpState {
	loading: boolean;
    error: null | string;
    isSignUp: boolean;
}

export interface SignUpAction {
	type: string;
    payload?: any;
}

export const initialState: SignUpState = {
	loading: false,
    error: null,
    isSignUp: false,
};

export enum SignUpActionTypes {
    SIGN_UP_START = 'SIGN_UP_START',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
}