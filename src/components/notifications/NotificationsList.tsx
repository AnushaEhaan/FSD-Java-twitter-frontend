import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/reusable/Spinner'
import { INotification } from '../../types/notification.type'
import { IRootState } from '../../types/store/IRootState.type'
import NotificationItem from '../../components/notifications/NotificationItem'
import { getNotifications, markAsSeenNotification } from '../../store/actions/notification.action'

const NotificationsList = () => {
   const dispatch = useDispatch()
   const { notifications, loading, error } = useSelector((state: IRootState) => state.notifications)
   const handleMarkAsSeenNotification = () => {
      dispatch(markAsSeenNotification())
   }

   const handleGetNotifications = () => {
      dispatch(getNotifications())
   }

   React.useEffect(() => {
      handleMarkAsSeenNotification()
      handleGetNotifications()
   }, [])

   return (
      <main>
         {loading && <Spinner height="20vh" />}
         {!loading && !error && notifications.length === 0 && (
            <p className="text-center fs-17 mt-6">No notifications yet</p>
         )}
         {!loading && !error && notifications.length > 0 && (
            <ul className="list-group">
               {notifications.map((notification: INotification) => (
                  <NotificationItem key={notification._id} notification={notification} />
               ))}
            </ul>
         )}
      </main>
   )
}

export default NotificationsList
