import { AuthActionTypes, AuthAction } from '../../interfaces/store/auth.store.types';
import axios from '../../common/axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


const authLoginStart = (): AuthAction => ({
    type: AuthActionTypes.AUTH_LOGIN_START,
});

export const authLoginSuccess = (user: any): AuthAction => ({
    type: AuthActionTypes.AUTH_LOGIN_SUCCESS,
    payload: user,
});

const authLoginFailure = (error: any): AuthAction => ({
    type: AuthActionTypes.AUTH_LOGIN_FAILURE,
    payload: error,
});


export const authLogin = (form:any) => async (dispatch: any) => {
    dispatch(authLoginStart());
    try {
        const response = await axios.post('/auth/login', JSON.stringify(form));
        const data = await response.data;
        Cookies.set('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch(authLoginSuccess(data.user));
        toast.success('Login Successful');
    } catch (error:any) {
        dispatch(authLoginFailure(error?.response.data.message));
        toast.error(error?.response.data.message);
    }
};



export const authLogout = () => (dispatch: any) => {
    Cookies.remove('token');
    localStorage.removeItem('user');
    dispatch({
        type: AuthActionTypes.AUTH_LOGOUT,
    });
    toast.success('Logout Successful');
}