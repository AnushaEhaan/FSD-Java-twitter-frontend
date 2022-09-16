import {
	initialState,
	NotificationAction,
	NotificationActionTypes,
	NotificationState,
} from '../../types/store/notification.types'

const reducer = (
	state = initialState,
	action: NotificationAction
): NotificationState => {
	switch (action.type) {
		case NotificationActionTypes.GET_NOTIFICATIONS_START:
			return {
				...state,
				loading: true,
			}
		case NotificationActionTypes.GET_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				notifications: action.payload,
			}
		case NotificationActionTypes.GET_NOTIFICATIONS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case NotificationActionTypes.ADD_NOTIFICATION:
			return {
				...state,
				notifications: [action.payload, ...state.notifications],
			}
		case NotificationActionTypes.COUNT_UNREAD_NOTIFICATIONS:
			return {
				...state,
				totalUnreadNotifications: action.payload,
			}
		case NotificationActionTypes.UPDATE_NOTIFICATION_USER_FOLLOWERS:
			console.log(action.payload)
			console.log(state.notifications)
			return {
				...state,
				notifications: state.notifications.map((notification: any) => {
					if (notification.sender._id === action.payload._id) {
						return {
							...notification,
							sender: {
								...notification.sender,
								followers: action.payload.followers,
							},
						}
					}
					return notification
				}),
			}
		default:
			return state
	}
}

export default reducer
