import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Nav from '../../components/Profile/Nav.profile';
import EditProfileModel from '../../components/Profile/EditProfileModel.profile';
import ProfileCover from '../../components/Profile/ProfileCover.profile';
import ProfileInfo from '../../components/Profile/ProfileInfo.profile';
import { getProfileUser } from '../../store/actions/profileInfo.action';
import { Outlet } from 'react-router-dom';

const Profile = (props: any) => {
	const params = useParams();
	const { id }: any = params;

	const dispatch = useDispatch();
	const { profileUser, loading, error } = useSelector((state: any) => state.profileUser);
	const { currentUser } = useSelector((state: any) => state.user);

	React.useEffect(() => {
		dispatch(getProfileUser(id));
	}, []);

	if (loading) {
		return <div className='vh-50 center'>Loading...</div>;
	}
	if (error) {
		return <div className='vh-50 center'>{error}</div>;
	}

	return (
		profileUser && (
			<div className='px-md-4'>
				<ProfileCover currentUser={currentUser} profileUser={profileUser} />
				<ProfileInfo user={profileUser} />
				<Nav id={id} />
				<div className='mt-4'>
					<Outlet />
				</div>
				<EditProfileModel user={profileUser} />
			</div>
		)
	);
};

export default Profile;
