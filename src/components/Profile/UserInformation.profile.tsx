import moment from 'moment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IUser } from '../../types/user.type'
import UserPeopleListModel from './UserPeopleListModel'
import { getUserPeople, clearUserPeopleList } from '../../store/actions/userPeopleList.action'

interface Iprops {
   user: IUser
}

const UserInformation = ({ user }: Iprops) => {
   const dispatch = useDispatch()
   const [show, setShow] = useState(false)
   const [type, setType] = useState('')
   const [page, setPage] = useState(0)
   const [totalPages, setTotalPages] = useState(0)
   const limit = 5

   const handleGetUserPeople = (type: string) => {
      dispatch(getUserPeople(user._id, type, page, limit))
   }

   const nextPage = () => {
      if (page < totalPages) {
         setPage(page + 1)
      }
   }

   const handleClose = () => {
      setShow(false)
      setType('')
      setPage(0)
      setTotalPages(0)
      dispatch(clearUserPeopleList())
   }

   const handleShow = (type: 'followers' | 'following') => {
      setType(type)
      setShow(true)
      setTotalPages(Math.ceil(user[type].length / limit))
      setPage(1)
   }

   React.useEffect(() => {
      page > 0 && handleGetUserPeople(type)
   }, [page, type])

   return (
      <div>
         <div className="mt-4">
            <h3>{user?.name}</h3>
            <p>{user?.bio}</p>
            <section className="d-flex flex-wrap mt-4">
               {user.location && (
                  <div className="me-6 mb-4">
                     <i className="fa-solid fa-location-pin me-2"></i>
                     <span>{user?.location}</span>
                  </div>
               )}
               {user?.website && (
                  <div className="me-6 mb-4">
                     <i className="fa-solid fa-link me-2"></i>
                     <a href={user?.website} target="_blank">
                        {user?.website}
                     </a>
                  </div>
               )}
               {user?.date_Of_birth && (
                  <div className="me-6 mb-4">
                     <i className="fa-solid fa-clock me-2"></i>
                     <span>Born {moment(user?.date_Of_birth).format('LL')}</span>
                  </div>
               )}
               {user?.date_Created && (
                  <div className="me-6 mb-4">
                     <i className="fa-solid fa-calendar-days me-2"></i>
                     <span>Joined {moment(user?.date_Created).format('MMM YYYY')}</span>
                  </div>
               )}
            </section>

            <section className="mt-2">
               <span className="me-3 cursor" onClick={() => handleShow('following')}>
                  <b>{user?.following.length}</b> Following
               </span>
               <span className="cursor" onClick={() => handleShow('followers')}>
                  <b>{user?.followers.length}</b> Followers
               </span>
            </section>
         </div>
         <UserPeopleListModel
            type={type}
            handleClose={handleClose}
            show={show}
            user={user}
            nextPage={nextPage}
            totalPages={totalPages}
            page={page}
         />
      </div>
   )
}

export default UserInformation
