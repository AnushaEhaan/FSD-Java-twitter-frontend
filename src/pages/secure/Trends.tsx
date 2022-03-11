import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TweetGroup from '../../components/tweet/TweetGroup';
import SearchTrends from '../../components/trends/Search.trends';

const Trends = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const { tweets, loading } = useSelector((state: any) => state.tweets);

	React.useEffect(() => {
		console.log(slug);
	}, []);

	return (
		<div className='mx-md-4 mt-4'>
			<header>
				<SearchTrends/>
			</header>
			<div className='mt-4'>
				<TweetGroup tweets={tweets} loading={loading} />
			</div>
		</div>
	);
};

export default Trends;
