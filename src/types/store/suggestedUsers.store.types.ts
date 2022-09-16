export interface SuggestedUsersState {
	loading: boolean
	error: string | null
	suggestedUsers: any[]
}

export interface SuggestedUsersAction {
	type: string
	payload?: any
}

export const initialState: SuggestedUsersState = {
	suggestedUsers: [],
	loading: false,
	error: null,
}

export enum SuggestedUsersActionTypes {
	SUGGESTED_USERS_START = 'SUGGESTED_USERS_START',
	SUGGESTED_USERS_SUCCESS = 'SUGGESTED_USERS_SUCCESS',
	SUGGESTED_USERS_FAILURE = 'SUGGESTED_USERS_FAILURE',
	SET_SUGGESTED_USER = 'SET_SUGGESTED_USER',
}
