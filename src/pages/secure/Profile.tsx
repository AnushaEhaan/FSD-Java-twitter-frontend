import React from 'react';
import { useParams } from 'react-router';
import ProfileCover from '../../components/Profile/ProfileCover.profile';
import ProfileInfo from '../../components/Profile/ProfileInfo.profile';
import EditProfileModel from '../../components/Profile/EditProfileModel.profile';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileUser } from '../../store/actions/profileInfo.action';

const Profile = () => {
	const params = useParams();
	const { id }: any = params;

	const dispatch = useDispatch();
	const { profileUser, loading, error } = useSelector((state: any) => state.profileUser);

	React.useEffect(() => {
		dispatch(getProfileUser(id));
	}, []);

	console.log(profileUser);

	if (loading) {
		return <div className='vh-50 center'>Loading...</div>;
	}
	if (error) {
		return <div className='vh-50 center'>{error}</div>;
	}

	return (
		profileUser && (
			<div>
				<ProfileCover user={profileUser} />
				<ProfileInfo user={profileUser} />
				<EditProfileModel user={profileUser} />
			</div>
		)
	);
};

export default Profile;
