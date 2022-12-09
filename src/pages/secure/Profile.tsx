import React, { lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Outlet } from 'react-router-dom'
import { getProfileUser } from '../../store/actions/profileInfo.action'
import { IRootState } from '../../types/store/IRootState.type'
const NavigationsTweet = lazy(() => import('../../components/Profile/NavigationsTweet'))
const ProfileCover = lazy(() => import('../../components/Profile/ProfileCover.profile'))
const UserInformation = lazy(() => import('../../components/Profile/UserInformation.profile'))

const Profile = () => {
	const dispatch = useDispatch()
	const params = useParams()
	const { id }: any = params

	const { profileUser, loading, error } = useSelector((state: IRootState) => state.profileUser)
	const { currentUser } = useSelector((state: IRootState) => state.user)

	React.useEffect(() => {
		dispatch(getProfileUser(id))
	}, [id])

	if (loading || !profileUser || !currentUser) return <div>Loading...</div>
	if (error) return <div className='vh-50 center'>{error}</div>

	return (
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
}

export default Profile
