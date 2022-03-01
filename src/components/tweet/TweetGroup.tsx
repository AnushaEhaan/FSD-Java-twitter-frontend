import React from 'react';
import Spinner from '../../components/common/Spinner';
import Tweet from '../../components/tweet/Tweet';

interface Iprops {
	tweets: any;
	loading: boolean;
}

const TweetGroup = ({ tweets, loading }: Iprops) => {
	return (
		<div>
			<section>
				{loading ? (
					<Spinner size='sm' />
				) : tweets.length > 0 ? (
					tweets.map((tweet: any) => <Tweet key={tweet._id} tweet={tweet} />)
				) : (
					<p className='text-center mt-7'>No tweets yet</p>
				)}
			</section>
		</div>
	);
};

export default TweetGroup;
