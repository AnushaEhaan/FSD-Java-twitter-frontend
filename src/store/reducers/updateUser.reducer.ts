import {
	UpdateUserActionTypes,
	UpdateUserAction,
	UpdateUserState,
	initialState,
} from '../../types/store/updateUser.types'

const updateUserReducer = (
	state: UpdateUserState = initialState,
	action: UpdateUserAction
): UpdateUserState => {
	switch (action.type) {
		case UpdateUserActionTypes.UPDATE_USER_START:
			return {
				...state,
				loading: true,
				error: null,
				isUserUpdated: false,
			}
		case UpdateUserActionTypes.UPDATE_USER_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				isUserUpdated: true,
			}
		case UpdateUserActionTypes.UPDATE_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				isUserUpdated: false,
			}
		default:
			return state
	}
}

export default updateUserReducer
