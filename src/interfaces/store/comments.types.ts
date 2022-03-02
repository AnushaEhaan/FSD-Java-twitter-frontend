export interface CommentsState {
	loading: boolean;
	error: string | null;
	comments: any;
}

export interface CommentsAction {
	type: string;
	payload?: any;
}

export const initialState: CommentsState = {
	loading: false,
	error: null,
	comments: [],
};

export enum CommentsActionTypes {
	GET_COMMENTS_START = 'GET_COMMENTS_START',
	GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS',
	GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE',
	ADD_COMMENT = 'ADD_COMMENT',
	UPDATE_COMMENT = 'UPDATE_COMMENT',
	DELETE_COMMENT = 'DELETE_COMMENT',
}
