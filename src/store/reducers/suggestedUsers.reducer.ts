import {
	suggestedUsersState,
	suggestedUsersAction,
	suggestedUsersActionTypes,
	initialState,
} from '../../types/store/suggestedUsers.store.types'

const suggestedUsersReducer = (
	state: suggestedUsersState = initialState,
	action: suggestedUsersAction
): suggestedUsersState => {
	switch (action.type) {
		case suggestedUsersActionTypes.SUGGESTED_USERS_START:
			return {
				...state,
				loading: true,
				error: null,
			}
		case suggestedUsersActionTypes.SUGGESTED_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				suggestedUsers: action.payload,
			}
		case suggestedUsersActionTypes.SUGGESTED_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case suggestedUsersActionTypes.SET_SUGGESTED_USER:
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
