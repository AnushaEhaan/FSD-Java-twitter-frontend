export interface userFollwersOrFollowingState {
	loading: boolean;
	error: string | null;
	userFollwersOrFollowing: any[];
}

export interface userFollwersOrFollowingAction {
	type: string;
	payload?: any;
}

export const initialState: userFollwersOrFollowingState = {
    loading: false,
	error: null,
	userFollwersOrFollowing: [],
};

export enum userFollwersOrFollowingActionTypes {
	GET_USER_FOLLOWERS_OR_FOLLOWING_START = 'GET_USER_FOLLOWERS_OR_FOLLOWING_START',
	GET_USER_FOLLOWERS_OR_FOLLOWING_SUCCESS = 'GET_USER_FOLLOWERS_OR_FOLLOWING_SUCCESS',
	GET_USER_FOLLOWERS_OR_FOLLOWING_FAILURE = 'GET_USER_FOLLOWERS_OR_FOLLOWING_FAILURE',
	SET_USER_FOLLOWERS_OR_FOLLOWING = 'SET_USER_FOLLOWERS_OR_FOLLOWING',
	CLEAR_USER_FOLLOWERS_OR_FOLLOWING = 'CLEAR_USER_FOLLOWERS_OR_FOLLOWING',
}
