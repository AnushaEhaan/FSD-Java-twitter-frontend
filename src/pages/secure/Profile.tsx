import React from 'react'
import { useParams } from 'react-router'
import ProfileCover from '../../components/Profile/ProfileCover.profile';
import ProfileInfo from '../../components/Profile/ProfileInfo.profile';
import EditProfileModel from '../../components/Profile/EditProfileModel.profile';
const Profile = () => {
  const params = useParams()
  return (
		<div>
			<ProfileCover />
			<ProfileInfo />
			<EditProfileModel />
		</div>
	);
}

export default Profile