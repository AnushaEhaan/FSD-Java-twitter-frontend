import { INotification } from '../../types/notification.type'

interface Iprops {
	notification: INotification
}

const NotificationMessageType = ({ notification }: Iprops) => {
	return (
		<div className='mb-0 fs-14 me-3'>
			{notification.type === 'like' && 'liked your post'}
			{notification.type === 'comment' && 'commented on your post'}
			{notification.type === 'follow' && 'followed you'}
			{notification.type === 'mention' && 'mentioned you in a post '}
			{notification.type === 'retweet' && 'retweeted your post'}
		</div>
	)
}

export default NotificationMessageType
