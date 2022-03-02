import React from 'react';
import { getTweetsLikeByUser } from '../../store/actions/tweets.action';
import { useDispatch, useSelector } from 'react-redux';
import TweetGroup from '../../components/tweet/TweetGroup';
import { useParams } from 'react-router';

const ProfileLikes = () => {
	const params = useParams();
	const { id }: any = params;
	const dispatch = useDispatch();
	const { tweets, loading: tweetLoading } = useSelector((state: any) => state.tweets);
	React.useEffect(() => {
		dispatch(getTweetsLikeByUser(id));
	}, []);

	return (
		<div>
			<TweetGroup tweets={tweets} loading={tweetLoading} />
		</div>
	);
};

export default ProfileLikes;
