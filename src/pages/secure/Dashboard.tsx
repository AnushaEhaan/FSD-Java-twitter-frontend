import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostTweet from '../../components/dashboard/PostTweet.dashboard';
import TweetGroup from '../../components/tweet/TweetGroup';
import { getTweets } from '../../store/actions/tweets.action';


const Dashboard = () => {
	const dispatch = useDispatch();
	const { tweets, loading } = useSelector((state: any) => state.tweets);

	React.useEffect(() => {
		const userId = Cookies.get('user_Id');
		userId && dispatch(getTweets(userId));
	}, [dispatch]);
	return (
		<div>
			<PostTweet />
			<div className='mx-md-4 mt-2'>
				<TweetGroup tweets={tweets} loading={loading} />
			</div>
		</div>
	);
};

export default Dashboard;
