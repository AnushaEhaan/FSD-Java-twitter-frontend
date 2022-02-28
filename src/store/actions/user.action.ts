import { UserActionTypes, UserAction } from '../../interfaces/store/user.store.types';
import axios from '../../common/axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


const userLoginStart = (): UserAction => ({
    type: UserActionTypes.USER_LOGIN_START,
});

export const userLoginSuccess = (user: any): UserAction => ({
    type: UserActionTypes.USER_LOGIN_SUCCESS,
    payload: user,
});

const userLoginFailure = (error: any): UserAction => ({
    type: UserActionTypes.USER_LOGIN_FAILURE,
    payload: error,
});


export const userLogin = (form:any) => async (dispatch: any) => {
    dispatch(userLoginStart());
    try {
        const response = await axios.post('/auth/login', JSON.stringify(form));
        const data = await response.data;
        Cookies.set('token', data.token);
        Cookies.set('user_Id', data.user._id);
        dispatch(userLoginSuccess(data.user));
        toast.success('Login Successful');
    } catch (error:any) {
        dispatch(userLoginFailure(error?.response.data.message));
        toast.error(error?.response.data.message);
    }
};


export const findCurrentUser = (id:string) => async (dispatch: any) => {
    try {
        const response = await axios.get(`/user/getUserById/${id}`);
        const data = await response.data;
        dispatch(userLoginSuccess(data));
        Cookies.set('user_Id', data.user._id);
        dispatch(userLoginSuccess(data.user));
    } catch (error:any) {
        dispatch(userLoginFailure(error?.response.data.message));
        location.href = '/';
        toast.error(error?.response.data.message);
    }
};



export const userLogout = () => (dispatch: any) => {
    Cookies.remove('token');
    localStorage.removeItem('user');
    dispatch({
        type: UserActionTypes.USER_LOGOUT,
    });
    toast.success('Logout Successful');
}