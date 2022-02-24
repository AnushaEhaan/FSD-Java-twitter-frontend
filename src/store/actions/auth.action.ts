import { AuthActionTypes, AuthAction } from '../../interfaces/store/auth.store.types';

const authLoginStart = (): AuthAction => ({
    type: AuthActionTypes.AUTH_LOGIN_START,
});