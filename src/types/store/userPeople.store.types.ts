export interface userPeopleState {
	loading: boolean
	error: string | null
	userPeople: any[]
}

export interface userPeopleAction {
	type: string
	payload?: any
}

export const initialState: userPeopleState = {
	loading: false,
	error: null,
	userPeople: [],
}

export enum userPeopleActionTypes {
	GET_USER_PEOPLE_START = 'GET_USER_PEOPLE_START',
	GET_USER_PEOPLE_SUCCESS = 'GET_USER_PEOPLE_SUCCESS',
	GET_USER_PEOPLE_FAILURE = 'GET_USER_PEOPLE_FAILURE',
	SET_USER_PEOPLE = 'SET_USER_PEOPLE',
	CLEAR_USER_PEOPLE = 'CLEAR_USER_PEOPLE',
}
