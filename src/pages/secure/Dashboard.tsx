import React from 'react';
import PostTweet from '../../components/dashboard/PostTweet.dashboard';
import Tweet from '../../components/common/tweet/Tweet';
import { getTweets } from '../../store/actions/tweets.action';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Spinner from '../../components/common/Spinner';

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
			<section className='mx-md-4 mt-2'>
				{loading ? (
					<Spinner size='sm' />
				) : tweets.length > 0 ? (
					tweets.map((tweet: any) => <Tweet key={tweet._id} tweet={tweet} />)
				) : (
					<p className='text-center'>No tweets yet</p>
				)}
			</section>
		</div>
	);
};

export default Dashboard;
