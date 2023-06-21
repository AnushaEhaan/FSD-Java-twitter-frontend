import { toast } from 'react-toastify'
import React, { useState } from 'react'
import Spinner from '../reusable/Spinner'
import Calendar from '../reusable/Calendar'
import { IUser } from '../../types/user.type'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import EditProfileCover from './EditProfileCover.profile'
import updateProfileJson from '../../jsons/updateProfile.json'
import { IRootState } from '../../types/store/IRootState.type'
import { updateUser, updateUserStart, uploadAvatar } from '../../store/actions/updateUser.action'

interface Iprops {
   user: IUser
   handleClose: () => void
   show: boolean
}

export interface IDateOfBirth {
   month: string | null
   day: number | null
   year: number | null
}

const EditProfileModel = ({ user, handleClose, show }: Iprops) => {
   const dispatch = useDispatch()
   const { loading, isUserUpdated } = useSelector((state: IRootState) => state.updateUser)

   const [avatar, setAvatar] = useState<File | null>(null)
   const [cover, setCover] = useState<File | null>(null)

   const [dateOfBirth, setDateOfBirth] = useState<IDateOfBirth>({
      month: null,
      day: null,
      year: null,
   })

   const handleDateOfBirth = (date: IDateOfBirth) => setDateOfBirth(date)

   const handleAvatarAndCover = ({ state, file }: any) => {
      if (state === 'avatar') return setAvatar(file)
      if (state === 'cover') setCover(file)
   }

   const [inputFormData, setInputFormData] = useState<Partial<IUser>>({
      name: user.name || '',
      location: user.location || '',
      website: user.website || '',
      bio: user.bio || '',
   })

   const handleSubmit = async () => {
      const data: Partial<IUser> = {
         ...inputFormData,
      }

      const dateOfBirthIsEmpty = Object.values(dateOfBirth).some((value) => value !== null)
      const allFieldsAreEmpty = Object.values(dateOfBirth).every((value) => value !== null)

      if (dateOfBirthIsEmpty && !allFieldsAreEmpty) {
         toast.error('Please fill all fields of date of birth')
         return
      } else if (dateOfBirthIsEmpty) {
         data.date_Of_birth = `${dateOfBirth.month}/${dateOfBirth.day}/${dateOfBirth.year}`
      }

      dispatch(updateUserStart())

      if (avatar) {
         const avatarSrcUrl = await uploadAvatar(avatar)
         avatarSrcUrl && (data.avatar = avatarSrcUrl.src)
         setAvatar(null)
      }

      if (cover) {
         const coverSrcUrl = await uploadAvatar(cover)
         coverSrcUrl && (data.cover = coverSrcUrl.src)
         setCover(null)
      }

      dispatch(updateUser(data))
   }

   React.useEffect(() => {
      if (isUserUpdated) {
         handleClose()
         toast.success('Profile updated successfully')
      }
   }, [isUserUpdated])

   return (
      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <EditProfileCover handleAvatar={handleAvatarAndCover} user={user} />
            {updateProfileJson &&
               updateProfileJson.map((item: any, index: number) => {
                  return (
                     <div className="mb-3 mt-4" key={index}>
                        <label htmlFor={item.name} className="form-label">
                           {item.placeholder}
                        </label>
                        {item.type == 'textarea' ? (
                           <textarea
                              className="form-control"
                              id={item.name}
                              rows={5}
                              value={inputFormData[item.name as keyof IUser] as string}
                              onChange={(e) => {
                                 setInputFormData({
                                    ...inputFormData,
                                    [item.name]: e.target.value,
                                 })
                              }}></textarea>
                        ) : (
                           <input
                              type={item.type}
                              className="form-control bg-white"
                              id={item.name}
                              value={inputFormData[item.name as keyof IUser] as string}
                              onChange={(e) => {
                                 setInputFormData({
                                    ...inputFormData,
                                    [item.name]: e.target.value,
                                 })
                              }}
                           />
                        )}
                     </div>
                  )
               })}

            <div className="mb-3">
               <label htmlFor="" className="form-label mb-3">
                  Date of birth
               </label>
               <Calendar handleDateOfBirth={handleDateOfBirth} />
            </div>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               Close
            </Button>
            <Button variant="dark" onClick={handleSubmit} disabled={loading}>
               {loading ? <Spinner size="sm" /> : 'Save changes'}
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default EditProfileModel
