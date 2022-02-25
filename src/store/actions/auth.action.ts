import { AuthActionTypes, AuthAction } from '../../interfaces/store/auth.store.types';
import axios from '../../common/axios';
import Cookies from 'js-cookie';

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
        return data.user;
    } catch (error) {
        dispatch(authLoginFailure(error));
        return error;
    }
};


