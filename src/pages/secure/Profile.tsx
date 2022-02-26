import React from 'react'
import { useParams } from 'react-router'
import ProfileCover from '../../components/Profile/ProfileCover.profile';
const Profile = () => {
  const params = useParams()
  return (
    <div>
        <ProfileCover/>

    </div>
  )
}

export default Profile