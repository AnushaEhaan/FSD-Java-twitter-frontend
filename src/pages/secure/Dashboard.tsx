import React from 'react'
import PostTweet from "../../components/dashboard/PostTweet.dashboard";
import Tweet from '../../components/common/tweet/Tweet';

const Dashboard = () => {
  return (
		<div>
			<PostTweet />
			<section className='mx-md-4 mt-5'>
				<Tweet />
			</section>
		</div>
	);
}

export default Dashboard