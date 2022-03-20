import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';
import FollowUnfollowBtn from '../sidebar/suggestedUsers/FollowUnfollowBtn';
import NotificationTypeMessage from './NotificationTypeMessage';

interface Iprops {
	notification: any
}

const NotificationListItem = ({ notification } : Iprops ) => {
	return (
		<li
			className={`${
				!notification.isRead && 'bg-secondary bg-opacity-25 rounded-0 '
			} list-group-item p-4 border-0 border-bottom `}
		>
			<Link
				to={`${
					notification?.tweet
						? `/tweet/${notification?.tweet._id}`
						: ``
				}`}
				className={`d-flex justify-content-between`}
			>
				<div className={`d-flex w-100 ${!notification?.tweet && 'align-items-center'}`}>
					<Avatar avatar={notification?.sender.avatar} />
					<section className='mb-0 w-100'>
						<div className='d-flex mt-1 align-items-center'>
							<p className='me-9px mb-0 fw-bold text-capitalize'>
								{notification?.sender.name}
							</p>
							<NotificationTypeMessage notification={notification} />
							<span className='fs-13 text-dark text-opacity-75 ms-3'>
								{moment(notification.createdAt).fromNow()}
							</span>
						</div>
						{notification.tweet && (
							<div className='mt-4'>
								{['like', 'reply', 'retweet', 'mention'].includes(notification?.type) && (
									<div className='w-100 d-flex'>
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
					{notification.type === 'follow' && (
						<FollowUnfollowBtn user={notification.sender}/>
					)}
				</div>
			</Link>
		</li>
	);
};

export default NotificationListItem