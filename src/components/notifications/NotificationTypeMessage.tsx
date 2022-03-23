import React from 'react'

interface Iprops {
	notification: any;
}



const NotificationTypeMessage = ({ notification }: Iprops) => {
	return <div>
        <p className='mb-0 fs-14 me-3'>
        { notification.type === 'like' && 'liked your post'}
        { notification.type === 'comment' && 'commented on your post'}
        { notification.type === 'follow' && 'followed you'}
        { notification.type === 'mention' && 'mentioned you in a post '}
        { notification.type === 'retweet' && 'retweeted your post'}
        </p>
  </div>;
};

export default NotificationTypeMessage