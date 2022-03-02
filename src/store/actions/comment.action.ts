import {
	CommentsAction,
	CommentsActionTypes,
} from '../../interfaces/store/comments.types';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const getCommentsStart = (): CommentsAction => ({
    type: CommentsActionTypes.GET_COMMENTS_START,
});

const getCommentsSuccess = (comments: any): CommentsAction => ({
    type: CommentsActionTypes.GET_COMMENTS_SUCCESS,
    payload: comments,
});

const getCommentsFailure = (error: string): CommentsAction => ({
    type: CommentsActionTypes.GET_COMMENTS_FAILURE,
    payload: error,
});

const addCommentType = (comment: any): CommentsAction => ({
    type: CommentsActionTypes.ADD_COMMENT,
    payload: comment,
});

const updateCommentType = (comment: any): CommentsAction => ({
    type: CommentsActionTypes.UPDATE_COMMENT,
    payload: comment,
});

const deleteCommentType = (comment: any): CommentsAction => ({
    type: CommentsActionTypes.DELETE_COMMENT,
    payload: comment,
});


export const addComment = (commentData: any) => async (dispatch: any) => {
	try {
		const response = await axios.post(`/comment/add`, commentData);
		const data = await response.data;
		dispatch(addCommentType(data));
        return true;
	} catch (error: any) {
		dispatch(getCommentsFailure(error?.response.data.message));
		toast.error(error?.response.data.message);
        return false
	}
};