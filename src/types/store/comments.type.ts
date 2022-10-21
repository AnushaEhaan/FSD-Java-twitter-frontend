import { IComment } from '../comment.type'

export interface CommentsState {
	loading: boolean
	error: string | null
	comments: IComment[]
}

export interface CommentsAction {
	type: string
	payload?: any
}

export const initialState: CommentsState = {
	loading: false,
	error: null,
	comments: [],
}

export enum CommentsActionTypes {
	GET_COMMENTS = 'GET_COMMENTS',
	ADD_COMMENT = 'ADD_COMMENT',
	UPDATE_COMMENT = 'UPDATE_COMMENT',
	DELETE_COMMENT = 'DELETE_COMMENT',
}
