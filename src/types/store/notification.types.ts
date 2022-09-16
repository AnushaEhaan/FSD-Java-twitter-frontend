export interface NotificationState {
	loading: boolean;
	error: string | null;
	notifications: any;
	totalUnreadNotifications: number;
}

export interface NotificationAction {
	type: string;
	payload?: any;
}

export const initialState: NotificationState = {
	loading: false,
	error: null,
	notifications: [],
	totalUnreadNotifications: 0,
};

export enum NotificationActionTypes {
	GET_NOTIFICATIONS_START = 'GET_NOTIFICATIONS_START',
	GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS',
	GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE',
	ADD_NOTIFICATION = 'ADD_NOTIFICATION',
	UPDATE_NOTIFICATION_USER_FOLLOWERS = 'UPDATE_NOTIFICATION_USER_FOLLOWERS',
	DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
	COUNT_UNREAD_NOTIFICATIONS = 'COUNT_UNREAD_NOTIFICATIONS',
	MARK_AS_READ_NOTIFICATION = 'MARK_AS_READ_NOTIFICATION',
}
