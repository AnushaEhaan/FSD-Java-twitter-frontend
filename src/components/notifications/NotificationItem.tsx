import moment from 'moment'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { markAsReadNotification } from '../../store/actions/notification.action'
import { INotification } from '../../types/notification.type'
import Avatar from '../reusable/Avatar'
import BtnUserFollowUnfollow from '../reusable/BtnUserFollowUnfollow'
import NotificationMessageType from './NotificationMessageType'

interface Iprops {
	notification: INotification
}

const NotificationItem = ({ notification }: Iprops) => {
	const dispatch = useDispatch()
	const handleMarkAsReadNotification = () =>
		dispatch(markAsReadNotification(notification._id))

	return (
		<li
			className={`${
				!notification.isRead && 'bg-secondary bg-opacity-25 rounded-0 '
			} list-group-item w-100 p-sm-4 px-2 py-4  border-0 border-bottom `}
			onClick={handleMarkAsReadNotification}>
			<Link
				to={`${
					notification?.tweet
						? `/tweet/${notification?.tweet._id}`
						: ``
				}`}
				className={`d-flex justify-content-between`}>
				<div
					className={`d-flex w-100 ${
						!notification?.tweet && 'align-items-center'
					} align-items-sm-start align-items-center`}>
					{
						<Link to={`/profile/${notification?.sender._id}`}>
							<Avatar avatar={notification?.sender.avatar} />
						</Link>
					}
					<section className='mb-0 w-100'>
						<div className='d-flex flex-wrap align-items-center'>
							<Link
								to={`/profile/${notification?.sender._id}`}
								className='me-9px mb-0 fw-bold text-capitalize'>
								{notification?.sender.name}
							</Link>
							<NotificationMessageType
								notification={notification}
							/>
							<span className='fs-12 text-dark text-opacity-75  mt-md-0 mt-1 d-md-flex d-block'>
								{moment(notification.createdAt).fromNow()}
							</span>
						</div>
						{notification.tweet && (
							<div className='mt-sm-4'>
								{[
									'like',
									'reply',
									'retweet',
									'mention',
									'comment',
								].includes(notification?.type) && (
									<div className='w-100 d-flex justify-content-between'>
										{notification?.tweet.content && (
											<p className='me-3 mb-2 fs-15'>
												{notification?.tweet.content}
											</p>
										)}
										{notification?.tweet.photo && (
											<img
												className='rounded-2 d-none d-sm-block w-75px h-70px'
												src={notification?.tweet.photo}
												alt=''
											/>
										)}
									</div>
								)}
							</div>
						)}
					</section>
					{notification.type === 'follow' && (
						<BtnUserFollowUnfollow user={notification.sender} />
					)}
				</div>
			</Link>
		</li>
	)
}

export default NotificationItem
