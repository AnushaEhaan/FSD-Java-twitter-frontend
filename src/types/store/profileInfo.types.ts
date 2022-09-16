export interface ProfileUserState {
	loading: boolean;
	error: null | string;
	profileUser: any
}

export interface ProfileUserAction {
	type: string;
	payload?: any;
}

export const initialState: ProfileUserState = {
	loading: false,
	error: null,
	profileUser: null
};

export enum ProfileUserActionTypes {
	GET_PROFILE_USER_START = 'GET_PROFILE_USER_START',
	GET_PROFILE_USER_SUCCESS = 'GET_PROFILE_USER_SUCCESS',
	GET_PROFILE_USER_FAILURE = 'GET_PROFILE_USER_FAILURE',
	SET_PROFILE_USER = 'SET_PROFILE_USER',
}
