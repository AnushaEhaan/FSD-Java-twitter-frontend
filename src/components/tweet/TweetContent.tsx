import React from 'react'

interface Iprops {
    tweet: any;
}

const TweetContent = ({tweet}:Iprops) => {
  return (
		<div>
			<main className='px-1 my-3 w-100'>
				<p>{tweet.content}</p>
				{tweet.photo && <img src={tweet.photo} className='w-100 rounded mt-1 h-md2' alt='' />}
			</main>
		</div>
	);
}

export default TweetContent