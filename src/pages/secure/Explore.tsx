import React from 'react'
import TweetGroupExplore from '../../components/explore/TweetGroup.explore';
import SearchUserExplore from '../../components/explore/SearchUser.explore';

const Explore = () => {

  return (
		<div className='mx-md-4 mt-5'>
			<SearchUserExplore />
			<TweetGroupExplore />
		</div>
	);
}

export default Explore