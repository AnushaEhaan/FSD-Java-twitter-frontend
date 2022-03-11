import React from 'react';
import Spinner from '../../components/common/Spinner';
import Tweet from '../../components/tweet/Tweet';
import TweetCommentModel from "./TweetCommentModel"
interface Iprops {
	tweets: any;
	loading: boolean;
	error?: string;
}

const TweetGroup = ({ tweets, loading, error }: Iprops) => {
	const [show, setShow] = React.useState(false);
	const [tweet, setTweet] = React.useState(null);
	
	const handleModelClose = () => {
		setShow(false);
		setTweet(null);
	};

	const handleTweet = (tweet: any) => {
		console.log(tweet);
		setTweet(tweet);
		setShow(true);
	};

	return (
		<div>
			<section>
				{loading ? (
					<Spinner size='sm' height="20vh" />
				) : tweets.length > 0 ? (
					tweets.map((tweet: any) => (
						<Tweet key={tweet._id} tweet={tweet} handleTweet={handleTweet} />
					))
				) : (
					<p className='text-center mt-7 alert alert-primary w-md mx-auto'>
						{error ? error : 'No Tweets yet'}
					</p>
				)}
			</section>
			{tweet && (
				<TweetCommentModel tweet={tweet} show={show} handleModelClose={handleModelClose} />
			)}
		</div>
	);
};

export default TweetGroup;
