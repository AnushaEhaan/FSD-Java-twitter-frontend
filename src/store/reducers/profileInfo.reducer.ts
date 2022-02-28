import {
    ProfileUserState,
    ProfileUserActionTypes,
    ProfileUserAction,
    initialState,
} from '../../interfaces/store/profileInfo.types';

const profileUserReducer = (
    state: ProfileUserState = initialState,
    action: ProfileUserAction,
): ProfileUserState => {
    switch (action.type) {
        case ProfileUserActionTypes.GET_PROFILE_USER_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ProfileUserActionTypes.GET_PROFILE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                profileUser: action.payload,
            };
        case ProfileUserActionTypes.GET_PROFILE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case ProfileUserActionTypes.SET_PROFILE_USER:
            return {
                ...state,
                profileUser: action.payload,
            };

        default:
            return state;
    }
}

export default profileUserReducer;