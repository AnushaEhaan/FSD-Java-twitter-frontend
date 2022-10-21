export interface UpdateUserState {
	loading: boolean;
	error: null | string;
	isUserUpdated: boolean;
}

export interface UpdateUserAction {
	type: string;
	payload?: any;
}

export const initialState: UpdateUserState = {
	loading: false,
	error: null,
	isUserUpdated: false,
};

export enum UpdateUserActionTypes {
	UPDATE_USER_START = 'UPDATE_USER_START',
	UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
	UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',
}
