export interface UserPeopleState {
	loading: boolean
	error: string | null
	userPeople: any[]
}

export interface UserPeopleAction {
	type: string
	payload?: any
}

export const initialState: UserPeopleState = {
	loading: false,
	error: null,
	userPeople: [],
}

export enum UserPeopleActionTypes {
	GET_USER_PEOPLE_START = 'GET_USER_PEOPLE_START',
	GET_USER_PEOPLE_SUCCESS = 'GET_USER_PEOPLE_SUCCESS',
	GET_USER_PEOPLE_FAILURE = 'GET_USER_PEOPLE_FAILURE',
	SET_USER_PEOPLE = 'SET_USER_PEOPLE',
	CLEAR_USER_PEOPLE = 'CLEAR_USER_PEOPLE',
}
