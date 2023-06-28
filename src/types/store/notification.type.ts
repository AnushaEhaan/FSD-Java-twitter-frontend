import { INotification } from '../notification.type'

export interface NotificationState {
	loading: boolean
	error: string | null
	notifications: INotification[]
	totalUnreadNotifications: number
}

export interface NotificationAction {
	type: string
	payload?: any
}

export const initialState: NotificationState = {
	error: null,
	loading: false,
	notifications: [],
	totalUnreadNotifications: 0,
}

export enum NotificationActionTypes {
	ADD_NOTIFICATION = 'ADD_NOTIFICATION',
	DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
	GET_NOTIFICATIONS_START = 'GET_NOTIFICATIONS_START',
	GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS',
	GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE',
	MARK_AS_READ_NOTIFICATION = 'MARK_AS_READ_NOTIFICATION',
	COUNT_UNREAD_NOTIFICATIONS = 'COUNT_UNREAD_NOTIFICATIONS',
	UPDATE_NOTIFICATION_USER_FOLLOWERS = 'UPDATE_NOTIFICATION_USER_FOLLOWERS',
}
