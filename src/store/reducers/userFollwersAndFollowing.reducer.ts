import {
	UserPeopleState,
	UserPeopleActionTypes,
	UserPeopleAction,
	initialState,
} from '../../types/store/userPeople.store.types'

const userPeopleReducer = (
	state: UserPeopleState = initialState,
	action: UserPeopleAction
): UserPeopleState => {
	switch (action.type) {
		case UserPeopleActionTypes.GET_USER_PEOPLE_START:
			return {
				...state,
				loading: true,
				error: null,
			}
		case UserPeopleActionTypes.GET_USER_PEOPLE_SUCCESS:
			return {
				...state,
				loading: false,
				userPeople: [...state.userPeople, ...action.payload],
			}
		case UserPeopleActionTypes.GET_USER_PEOPLE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case UserPeopleActionTypes.SET_USER_PEOPLE:
			return {
				...state,
				userPeople: state.userPeople.map((user) => {
					if (user._id === action.payload._id) {
						return action.payload
					}
					return user
				}),
			}
		case UserPeopleActionTypes.CLEAR_USER_PEOPLE:
			return {
				...state,
				userPeople: [],
			}
		default:
			return state
	}
}

export default userPeopleReducer
