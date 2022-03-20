import React from 'react'

interface Iprops {
	notification: any;
}



const NotificationTypeMessage = ({ notification }: Iprops) => {
	return <div>
        {
            notification.type === 'like' && <p className='mb-0 fs-15'>
                liked your post
            </p>
        }
        {
            notification.type === 'comment' && <p className='mb-0 fs-15'>
                commented on your post
            </p>
        }
        {
            notification.type === 'follow' && <p className='mb-0 fs-15'>
                followed you
            </p>
        }
        {
            notification.type === 'mention' && <p className='mb-0 fs-15'>
                mentioned you in a post
            </p>
        }
        {
            notification.type === 'retweet' && <p className='mb-0 fs-15'>
                retweeted your post
            </p>
        }
  </div>;
};

export default NotificationTypeMessage