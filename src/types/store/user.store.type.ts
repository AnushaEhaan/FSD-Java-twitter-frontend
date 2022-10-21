import { IUser } from '../user.type'

export interface UserState {
	currentUser: IUser | null
	loading: boolean
	error: string | null
	isAuthenticated: boolean
}

export interface UserAction {
	type: string
	payload?: any
}

export const initialState: UserState = {
	currentUser: null,
	loading: false,
	error: null,
	isAuthenticated: false,
}

export enum UserActionTypes {
	USER_LOGIN_START = 'USER_LOGIN_START',
	USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
	USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE',
	USER_LOGOUT = 'USER_LOGOUT',
	SET_USER_USER = 'SET_USER_USER',
}
