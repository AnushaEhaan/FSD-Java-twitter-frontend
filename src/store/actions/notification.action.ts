import Cookies from 'js-cookie'
import axios from '../../config/axios.config'
import { toast } from 'react-toastify'
import {
	NotificationAction,
	NotificationActionTypes,
} from '../../types/store/notification.type'

const getNotificationsStart = (): NotificationAction => ({
	type: NotificationActionTypes.GET_NOTIFICATIONS_START,
})

const getNotificationsSuccess = (notifications: any): NotificationAction => ({
	type: NotificationActionTypes.GET_NOTIFICATIONS_SUCCESS,
	payload: notifications,
})

const getNotificationsFailure = (error: any): NotificationAction => ({
	type: NotificationActionTypes.GET_NOTIFICATIONS_FAILURE,
	payload: error,
})

export const countUnreadNotificationsType = (
	count: number
): NotificationAction => ({
	type: NotificationActionTypes.COUNT_UNREAD_NOTIFICATIONS,
	payload: count,
})

export const update_notification_user_followers = (
	user: any
): NotificationAction => ({
	type: NotificationActionTypes.UPDATE_NOTIFICATION_USER_FOLLOWERS,
	payload: user,
})

const markAsReadNotificationType = (notification: any): NotificationAction => ({
	type: NotificationActionTypes.MARK_AS_READ_NOTIFICATION,
	payload: notification,
})

export const getNotifications = () => async (dispatch: any) => {
	const userId = Cookies.get('user_Id')
	dispatch(getNotificationsStart())
	try {
		const res = await axios.get(`/notification/get/${userId}`)
		const data = await res.data
		dispatch(getNotificationsSuccess(data.notifications))
	} catch (error: any) {
		toast.error(error?.response.data.message)
	}
}

export const countUnreadNotifications = () => async (dispatch: any) => {
	const userId = Cookies.get('user_Id')
	try {
		const res = await axios.get(`/notification/count/${userId}`)
		const data = await res.data
		dispatch(countUnreadNotificationsType(data.count))
		console.log(data.count)
	} catch (error: any) {
		toast.error(error?.response.data.message)
	}
}

export const markAsSeenNotification = () => async (dispatch: any) => {
	const userId = Cookies.get('user_Id')
	try {
		const res = await axios.put(`/notification/markAsSeen/${userId}`)
		const data = await res.data
		dispatch(countUnreadNotificationsType(0))
		console.log(data)
	} catch (error: any) {
		toast.error(error?.response.data.message)
	}
}

export const markAsReadNotification =
	(notificationId: string) => async (dispatch: any) => {
		const userId = Cookies.get('user_Id')
		try {
			const res = await axios.put(
				`/notification/markAsRead/${userId}/${notificationId}`
			)
			const data = await res.data
			dispatch(markAsReadNotificationType(data.notification))
		} catch (error: any) {
			toast.error(error?.response.data.message)
		}
	}
