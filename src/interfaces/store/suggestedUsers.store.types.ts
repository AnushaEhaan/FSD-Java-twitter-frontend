export interface suggestedUsersState {
	loading: boolean;
	error: string | null;
	suggestedUsers: any[];
}

export interface suggestedUsersAction {
	type: string;
	payload?: any;
}

export const initialState: suggestedUsersState = {
	suggestedUsers: [],
	loading: false,
	error: null,
};

export enum suggestedUsersActionTypes {
	SUGGESTED_USERS_START = 'SUGGESTED_USERS_START',
	SUGGESTED_USERS_SUCCESS = 'SUGGESTED_USERS_SUCCESS',
	SUGGESTED_USERS_FAILURE = 'SUGGESTED_USERS_FAILURE',
	SET_SUGGESTED_USER = 'SET_SUGGESTED_USER',
}
