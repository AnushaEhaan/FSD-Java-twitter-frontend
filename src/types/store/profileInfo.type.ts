import { IUser } from '../user.type'

export enum ProfileUserActionTypes {
	SET_PROFILE_USER = 'SET_PROFILE_USER',
	GET_PROFILE_USER_START = 'GET_PROFILE_USER_START',
	GET_PROFILE_USER_SUCCESS = 'GET_PROFILE_USER_SUCCESS',
	GET_PROFILE_USER_FAILURE = 'GET_PROFILE_USER_FAILURE',
}

export interface ProfileUserAction {
	type: string
	payload?: any
}

export interface ProfileUserState {
	loading: boolean
	error: null | string
	profileUser: IUser | null
}

export const initialState: ProfileUserState = {
	loading: false,
	error: null,
	profileUser: null,
}

