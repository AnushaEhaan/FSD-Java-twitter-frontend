import {
	userFollwersOrFollowingActionTypes,
	userFollwersOrFollowingAction,
} from '../../interfaces/store/userFollwersOrFollowing.store.types';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const getUserFollwersOrFollowingStart = (): userFollwersOrFollowingAction => ({
    type: userFollwersOrFollowingActionTypes.GET_USER_FOLLOWERS_OR_FOLLOWING_START,
});

const getUserFollwersOrFollowingSuccess = (payload: any[]): userFollwersOrFollowingAction => ({
    type: userFollwersOrFollowingActionTypes.GET_USER_FOLLOWERS_OR_FOLLOWING_SUCCESS,
    payload,
});

const getUserFollwersOrFollowingFailure = (error: string): userFollwersOrFollowingAction => ({
    type: userFollwersOrFollowingActionTypes.GET_USER_FOLLOWERS_OR_FOLLOWING_FAILURE,
    payload: error,
});

const setUserFollwersOrFollowing = (payload: any): userFollwersOrFollowingAction => ({
    type: userFollwersOrFollowingActionTypes.SET_USER_FOLLOWERS_OR_FOLLOWING,
    payload,
});

export const getUserFollwersOrFollowing = (userId: string, type: string, page:number, limit:number) => async (dispatch: any) => {
    dispatch(getUserFollwersOrFollowingStart());
    try {
        const response = await axios.get(`/user/getUserFollowersOrFollowing/${userId}/${type}?page=${page}&limit=${limit}`);
        dispatch(getUserFollwersOrFollowingSuccess(response.data.users));
        console.log(response.data);
    } catch (error:any) {
        dispatch(getUserFollwersOrFollowingFailure(error.response.data.error));
        toast.error(error.response.data.error);
    }
};