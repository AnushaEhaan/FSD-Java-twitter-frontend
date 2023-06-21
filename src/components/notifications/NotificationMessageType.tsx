import { INotification } from '../../types/notification.type'

interface Iprops {
   notification: INotification
}

const NotificationMessageType = ({ notification }: Iprops) => {
   const messages = {
      like: 'liked your post',
      comment: 'commented on your post',
      follow: 'followed you',
      mention: 'mentioned you in a post',
      retweet: 'retweeted your post',
   }

   return <div className="mb-0 fs-14 me-3"> {messages[notification.type]}</div>
}

export default NotificationMessageType
