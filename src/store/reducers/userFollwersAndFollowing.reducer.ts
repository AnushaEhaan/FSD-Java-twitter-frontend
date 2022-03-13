import {
	userFollwersOrFollowingState,
	userFollwersOrFollowingActionTypes,
	userFollwersOrFollowingAction,
	initialState,
} from '../../interfaces/store/userFollwersOrFollowing.store.types';

const userFollwersOrFollowingReducer = (
    state: userFollwersOrFollowingState = initialState,
    action: userFollwersOrFollowingAction,
): userFollwersOrFollowingState => {
    switch (action.type) {
        case userFollwersOrFollowingActionTypes.GET_USER_FOLLOWERS_OR_FOLLOWING_START:
            return {
                ...state,
                loading: true,
                userFollwersOrFollowing: [],
                error: null,
            };
        case userFollwersOrFollowingActionTypes.GET_USER_FOLLOWERS_OR_FOLLOWING_SUCCESS:
            return {
                ...state,
                loading: false,
                userFollwersOrFollowing: action.payload,
            };
        case userFollwersOrFollowingActionTypes.GET_USER_FOLLOWERS_OR_FOLLOWING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case userFollwersOrFollowingActionTypes.SET_USER_FOLLOWERS_OR_FOLLOWING:
            return {
                ...state,
                userFollwersOrFollowing: state.userFollwersOrFollowing.map((user) => {
                    if (user._id === action.payload._id) {
                        return action.payload;
                    }
                    return user;
                })
            };
        default:
            return state;
    }
}

export default userFollwersOrFollowingReducer;