import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import NavigationsTweet from '../../components/Profile/NavigationsTweet'
import ProfileCover from '../../components/Profile/ProfileCover.profile'
import UserInformation from '../../components/Profile/UserInformation.profile'
import { getProfileUser } from '../../store/actions/profileInfo.action'
import { Outlet } from 'react-router-dom'

const Profile = (props: any) => {
	const dispatch = useDispatch()
	const params = useParams()
	const { id }: any = params

	const { profileUser, loading, error } = useSelector(
		(state: any) => state.profileUser
	)
	const { currentUser } = useSelector((state: any) => state.user)

	React.useEffect(() => {
		dispatch(getProfileUser(id))
	}, [id])

	if (loading) {
		return <div className='vh-50 center'>Loading...</div>
	}
	if (error) {
		return <div className='vh-50 center'>{error}</div>
	}

	return (
		profileUser && (
			<div className='px-md-4'>
				<ProfileCover
					currentUser={currentUser}
					profileUser={profileUser}
				/>
				<UserInformation user={profileUser} />
				<NavigationsTweet id={id} />
				<div className='mt-4'>
					<Outlet />
				</div>
			</div>
		)
	)
}

export default Profile
