import React from 'react'
import {
	getNotifications,
	markAsSeenNotification,
} from '../../store/actions/notification.action'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/reusable/Spinner'
import NotificationItem from '../../components/notifications/NotificationItem'

const Notification = () => {
	const dispatch = useDispatch()
	const { notifications, loading, error } = useSelector(
		(state: any) => state.notifications
	)
	const handleMarkAsSeenNotification = () =>
		dispatch(markAsSeenNotification())
	const handleGetNotifications = () => dispatch(getNotifications())
	React.useEffect(() => {
		handleMarkAsSeenNotification()
		handleGetNotifications()
	}, [])

	return (
		<div className='py-md-5 pt-1'>
			<h3 className='ms-md-4 fs-22'>Notification</h3>
			<main>
				{loading && <Spinner height='20vh' />}
				{!loading && !error && notifications.length === 0 && (
					<p className='text-center fs-17 mt-6'>
						No notifications yet
					</p>
				)}
				{!loading && !error && notifications.length > 0 && (
					<ul className='list-group'>
						{notifications.map((notification: any) => (
							<NotificationItem
								key={notification._id}
								notification={notification}
							/>
						))}
					</ul>
				)}
			</main>
		</div>
	)
}

export default Notification
