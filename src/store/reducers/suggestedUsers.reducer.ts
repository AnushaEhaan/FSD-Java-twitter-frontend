import {
	SuggestedUsersState,
	SuggestedUsersAction,
	SuggestedUsersActionTypes,
	initialState,
} from '../../types/store/suggestedUsers.store.type'

const suggestedUsersReducer = (
	state: SuggestedUsersState = initialState,
	action: SuggestedUsersAction
): SuggestedUsersState => {
	switch (action.type) {
		case SuggestedUsersActionTypes.SUGGESTED_USERS_START:
			return {
				...state,
				loading: true,
				error: null,
			}
		case SuggestedUsersActionTypes.SUGGESTED_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				suggestedUsers: action.payload,
			}
		case SuggestedUsersActionTypes.SUGGESTED_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case SuggestedUsersActionTypes.SET_SUGGESTED_USER:
			return {
				...state,
				suggestedUsers: state.suggestedUsers.map((user: any) =>
					user._id === action.payload._id ? action.payload : user
				),
			}
		default:
			return state
	}
}

export default suggestedUsersReducer
