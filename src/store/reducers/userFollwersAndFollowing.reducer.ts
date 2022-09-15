import {
	userPeopleState,
	userPeopleActionTypes,
	userPeopleAction,
	initialState,
} from '../../interfaces/store/userPeople.store.types'

const userPeopleReducer = (
	state: userPeopleState = initialState,
	action: userPeopleAction
): userPeopleState => {
	switch (action.type) {
		case userPeopleActionTypes.GET_USER_PEOPLE_START:
			return {
				...state,
				loading: true,
				error: null,
			}
		case userPeopleActionTypes.GET_USER_PEOPLE_SUCCESS:
			return {
				...state,
				loading: false,
				userPeople: [...state.userPeople, ...action.payload],
			}
		case userPeopleActionTypes.GET_USER_PEOPLE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case userPeopleActionTypes.SET_USER_PEOPLE:
			return {
				...state,
				userPeople: state.userPeople.map((user) => {
					if (user._id === action.payload._id) {
						return action.payload
					}
					return user
				}),
			}
		case userPeopleActionTypes.CLEAR_USER_PEOPLE:
			return {
				...state,
				userPeople: [],
			}
		default:
			return state
	}
}

export default userPeopleReducer
