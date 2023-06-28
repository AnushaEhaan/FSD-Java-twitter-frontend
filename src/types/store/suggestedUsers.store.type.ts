import { IUser } from '../user.type'

export interface SuggestedUsersState {
   loading: boolean
   error: string | null
   suggestedUsers: IUser[]
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
   SET_SUGGESTED_USER = 'SET_SUGGESTED_USER',
   SUGGESTED_USERS_START = 'SUGGESTED_USERS_START',
   SUGGESTED_USERS_SUCCESS = 'SUGGESTED_USERS_SUCCESS',
   SUGGESTED_USERS_FAILURE = 'SUGGESTED_USERS_FAILURE',
}
