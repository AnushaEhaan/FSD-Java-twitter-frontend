import {
	CommentsAction,
	CommentsActionTypes,
} from '../../types/store/comments.types'
import axios from '../../config/axios.config'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { updateTweet } from './tweets.action'

export const getComments = (comments: any): CommentsAction => ({
	type: CommentsActionTypes.GET_COMMENTS,
	payload: comments,
})

const addCommentType = (comment: any): CommentsAction => ({
	type: CommentsActionTypes.ADD_COMMENT,
	payload: comment,
})

const updateCommentType = (comment: any): CommentsAction => ({
	type: CommentsActionTypes.UPDATE_COMMENT,
	payload: comment,
})

const deleteCommentType = (comment: any): CommentsAction => ({
	type: CommentsActionTypes.DELETE_COMMENT,
	payload: comment,
})

export const addComment = (commentData: any) => async (dispatch: any) => {
	try {
		const response = await axios.post(`/comment/add`, commentData)
		const data = await response.data
		dispatch(addCommentType(data.comment))
		dispatch(updateTweet(data?.comment?.tweet))
		return true
	} catch (error: any) {
		toast.error(error?.response.data.message)
		return false
	}
}
