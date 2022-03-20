import Cookies from 'js-cookie';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import {
	NotificationAction,
	NotificationActionTypes,
} from '../../interfaces/store/notification.types';


const getNotificationsStart = (): NotificationAction => ({
    type: NotificationActionTypes.GET_NOTIFICATIONS_START,
});

const getNotificationsSuccess = (notifications: any): NotificationAction => ({
    type: NotificationActionTypes.GET_NOTIFICATIONS_SUCCESS,
    payload: notifications,
});

const getNotificationsFailure = (error: any): NotificationAction => ({
    type: NotificationActionTypes.GET_NOTIFICATIONS_FAILURE,
    payload: error,
});


export const getNotifications = () => async (dispatch: any) => {
    const userId = Cookies.get('user_Id');
    dispatch(getNotificationsStart());
    try {
        const res = await axios.get(`/notification/get/${userId}`);
         const data = await res.data;
        dispatch(getNotificationsSuccess(data.notifications));
        console.log(data.notifications);
    } catch (error: any) {
		toast.error(error?.response.data.message);
	}
}