export interface NotificationState {
	loading: boolean;
	error: string | null;
	notifications: any;
}

export interface NotificationAction {
	type: string;
	payload?: any;
}

export const initialState: NotificationState = {
	loading: false,
	error: null,
	notifications: [],
};

export enum NotificationActionTypes {
    GET_NOTIFICATIONS_START = 'GET_NOTIFICATIONS_START',
    GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS',
    GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE',
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION',
    DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
}
