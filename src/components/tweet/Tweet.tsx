import moment from 'moment';
import React from 'react';
import TweetDropDownMenu from './TweetDropDownMenu.tweet';

interface Iprops {
	tweet: any;
}

const Tweet = ({ tweet }: Iprops) => {
	return (
		<section className='border-bottom py-4'>
			<header className='d-flex justify-content-between align-items-start'>
				<div className='d-flex'>
					<img src={tweet.user.avatar} alt='' className='rounded-circle w-40px h-40px me-3' />
					<div>
						<p className='fw-bold fs-16 mb-0'>{tweet.user.name}</p>
						<span className='fs-12 text-dark text-opacity-75'>
							{moment(tweet.createdAt).fromNow()}
						</span>
					</div>
				</div>
				<TweetDropDownMenu />
			</header>

			<main className='px-1 my-4'>
				<p>{tweet.content}</p>
				{tweet.photo && <img src={tweet.photo} className='w-100 rounded mt-1 h-md2' alt='' />}
			</main>

			<footer className='d-flex  justify-content-between '>
				<div className='d-flex'>
					<button className='btn btn-outline-secondary me-4 text-dark text-opacity-50 border-0 w-40px h-40px center'>
						<i className='fa-regular fa-comment fs-19 '></i>
					</button>
					<button className='btn btn-outline-secondary me-4 text-dark text-opacity-50 border-0 w-40px h-40px center'>
						<i className='fa-solid fa-retweet fs-19 '></i>
					</button>
					<button className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'>
						<i className='fa-regular fa-heart fs-19 '></i>
					</button>
				</div>
				<button className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'>
					<i className='fa-solid fa-arrow-up-from-bracket fs-19 '></i>
				</button>
			</footer>
		</section>
	);
};

export default Tweet;
