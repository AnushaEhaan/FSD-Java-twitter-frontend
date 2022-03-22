import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';
import FollowUnfollowBtn from '../sidebar/suggestedUsers/FollowUnfollowBtn';
import NotificationTypeMessage from './NotificationTypeMessage';
import { markAsReadNotification } from "../../store/actions/notification.action"
import { useDispatch } from "react-redux"

interface Iprops {
	notification: any
}

const NotificationListItem = ({ notification } : Iprops ) => {

	const dispatch = useDispatch()
	const handleMarkAsReadNotification = () => dispatch(markAsReadNotification(notification._id))

	return (
		<li
			className={`${
				!notification.isRead && 'bg-secondary bg-opacity-25 rounded-0 '
			} list-group-item p-4 border-0 border-bottom `}
			onClick={handleMarkAsReadNotification}
		>
			<Link
				to={`${notification?.tweet ? `/tweet/${notification?.tweet._id}` : ``}`}
				className={`d-flex justify-content-between`}
			>
				<div className={`d-flex w-100 ${!notification?.tweet && 'align-items-center'}`}>
					{
						<Link to={`/profile/${notification?.sender._id}`}>
							<Avatar avatar={notification?.sender.avatar} />
						</Link>
					}
					<section className='mb-0 w-100'>
						<div className='d-flex mt-1 align-items-center'>
							<Link
								to={`/profile/${notification?.sender._id}`}
								className='me-9px mb-0 fw-bold text-capitalize'
							>
								{notification?.sender.name}
							</Link>
							<NotificationTypeMessage notification={notification} />
							<span className='fs-13 text-dark text-opacity-75 ms-3'>
								{moment(notification.createdAt).fromNow()}
							</span>
						</div>
						{notification.tweet && (
							<div className='mt-4'>
								{['like', 'reply', 'retweet', 'mention', 'comment'].includes(notification?.type) && (
									<div className='w-100 d-flex justify-content-between'>
										{notification?.tweet.content && (
											<p className='me-3 mb-2 fs-15'>{notification?.tweet.content}</p>
										)}
										{notification?.tweet.photo && (
											<img
												className='rounded-2 w-75px h-70px'
												src={notification?.tweet.photo}
												alt=''
											/>
										)}
									</div>
								)}
							</div>
						)}
					</section>
					{notification.type === 'follow' && <FollowUnfollowBtn user={notification.sender} />}
				</div>
			</Link>
		</li>
	);
};

export default NotificationListItem