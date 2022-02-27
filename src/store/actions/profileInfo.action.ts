import {
	ProfileUserActionTypes,
	ProfileUserAction,
} from '../../interfaces/store/profileInfo.types';
import axios from '../../common/axios';
import { toast } from 'react-toastify';


const getProfileUserStart = (): ProfileUserAction => ({
    type: ProfileUserActionTypes.GET_PROFILE_USER_START,
});

const getProfileUserSuccess = (profileUser: any): ProfileUserAction => ({
    type: ProfileUserActionTypes.GET_PROFILE_USER_SUCCESS,
    payload: profileUser,
});

const getProfileUserFailure = (error: any): ProfileUserAction => ({
    type: ProfileUserActionTypes.GET_PROFILE_USER_FAILURE,
    payload: error,
});


export const getProfileUser = (userId: string) => async (dispatch: any) => {
    dispatch(getProfileUserStart());
    try {
        const response = await axios.get(`/user/getUserById/${userId}`);
        const data = await response.data;
        dispatch(getProfileUserSuccess(data.user));
    } catch (error:any) {
        dispatch(getProfileUserFailure(error?.response.data.message));
        toast.error(error?.response.data.message);
    }
};