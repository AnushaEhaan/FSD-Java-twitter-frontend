
import {
	initialState,
	CommentsAction,
	CommentsActionTypes,
	CommentsState,
} from '../../interfaces/store/comments.types';

const commentsReducer = (
    state: CommentsState = initialState,
    action: CommentsAction,
): CommentsState => {
    switch (action.type) {
        case CommentsActionTypes.GET_COMMENTS_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CommentsActionTypes.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload,
            };
        case CommentsActionTypes.GET_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CommentsActionTypes.ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments],
            };
        case CommentsActionTypes.UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map((comment: any) =>
                    comment._id === action.payload._id ? action.payload : comment,
                ),
            };

        case CommentsActionTypes.DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(
                    (comment: any) => comment._id !== action.payload._id,
                ),
            };

        default:
            return state;
    }
}

export default commentsReducer;