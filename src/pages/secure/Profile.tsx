import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Nav from '../../components/Profile/Nav.profile';
import EditProfileModel from '../../components/Profile/EditProfileModel.profile';
import ProfileCover from '../../components/Profile/ProfileCover.profile';
import ProfileInfo from '../../components/Profile/ProfileInfo.profile';
import TweetGroup from '../../components/tweet/TweetGroup';
import { getProfileUser } from '../../store/actions/profileInfo.action';
import { getUserTweets } from '../../store/actions/tweets.action';

const Profile = () => {
	const params = useParams();
	const { id }: any = params;

	const dispatch = useDispatch();
	const { profileUser, loading, error } = useSelector((state: any) => state.profileUser);
	const { tweets, loading:tweetLoading } = useSelector((state: any) => state.tweets);
	const { currentUser } = useSelector((state: any) => state.user);

	React.useEffect(() => {
		dispatch(getProfileUser(id));
		dispatch(getUserTweets(id));
	}, []);


	if (loading) {
		return <div className='vh-50 center'>Loading...</div>;
	}
	if (error) {
		return <div className='vh-50 center'>{error}</div>;
	}

	console.log('currentUser', currentUser);
	console.log('profileUser', profileUser);

	return (
		profileUser && (
			<div className='px-md-4'>
				<ProfileCover currentUser={currentUser} profileUser={profileUser} />
				<ProfileInfo user={profileUser} />
				<Nav/>
				<div className='mt-4'>
					<TweetGroup tweets={tweets} loading={tweetLoading} />
				</div>
				<EditProfileModel user={profileUser} />
			</div>
		)
	);
};

export default Profile;
