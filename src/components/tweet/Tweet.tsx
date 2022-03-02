import Cookies from 'js-cookie';
import moment from 'moment';
import React, { useState } from 'react';
import TweetDropDownMenu from './TweetDropDownMenu.tweet';
import { likeTweet, retweet } from '../../store/actions/tweets.action';
import { findUserById } from '../../store/actions/profileInfo.action';
import { useDispatch, useSelector } from 'react-redux';

interface Iprops {
	tweet: any;
}

const Tweet = ({ tweet }: Iprops) => {
	const currentUserId = Cookies.get('user_Id');
	const { currentUser } = useSelector((state: any) => state.user);
	const [whoRetweeted, setWhoRetweeted] = useState('');
	const dispatch = useDispatch();
	const handleLike = (tweetId: string) => {
		dispatch(likeTweet(tweetId));
	};

	const handleRetweet = (tweetId: string) => {
		dispatch(retweet(tweetId));
	};

	React.useEffect(() => {
		if (tweet.retweetedBy.length > 0) {
			if (tweet.retweetedBy.includes(currentUserId)) {
				setWhoRetweeted('You');
				return;
			}
			currentUser.following.forEach(async (user: any) => {
				if (tweet.retweetedBy.includes(user)) {
					const data = await findUserById(user);
					setWhoRetweeted(data.user.name);
				}
			});
		}
	}, [tweet]);

	return (
		<section className='border-bottom py-4'>
			<header className='d-flex justify-content-between align-items-start'>
				<div className='d-flex'>
					<img src={tweet.user.avatar} alt='' className='rounded-circle w-40px h-40px me-3' />
					<div>
						<div className='mb-3 d-flex'>
							<p className='fw-bold me-3 fs-16 mb-0'>{tweet.user.name}</p>
							{whoRetweeted && (
								<div className='text-dark text-opacity-75'>
									<i className='fa-solid fw-bold fa-retweet fs-13'></i>
									<span className='fs-13 ms-1 fw-bold'>{whoRetweeted} Retweeted</span>
								</div>
							)}
						</div>
						<span className='fs-13 text-dark text-opacity-75 me-2'>
							{moment(tweet.createdAt).fromNow()}
						</span>
						<i
							className={`fa-solid ${
								tweet.is_Public ? ' fa-globe' : ' fa-lock'
							}  fs-12 text-dark text-opacity-50 `}
						></i>
					</div>
				</div>
				<TweetDropDownMenu />
			</header>

			<main className='px-1 my-3'>
				<p>{tweet.content}</p>
				{tweet.photo && <img src={tweet.photo} className='w-100 rounded mt-1 h-md2' alt='' />}
			</main>

			<footer className='d-flex  justify-content-between '>
				<div className='d-flex align-items-center'>
					<button className='btn btn-outline-secondary me-4 text-dark text-opacity-50 border-0 w-40px h-40px center'>
						<i className='fa-regular fa-comment fs-19 '></i>
					</button>
						<button
							className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'
							onClick={() => handleRetweet(tweet._id)}
						>
							<i
								className={`fa-solid  fa-retweet fs-19 ${
									tweet.retweetedBy.includes(currentUserId) && 'text-success'
								} `}
							></i>
						</button>
						<span>{tweet.retweetedBy.length > 0 && tweet.retweetedBy.length}</span>
					<button
						className='btn btn-outline-secondary ms-4 text-dark text-opacity-50 border-0 w-40px h-40px center'
						onClick={() => handleLike(tweet._id)}
					>
						<i
							className={`fa-${
								tweet.likes.includes(currentUserId) ? 'solid text-danger' : 'regular'
							}  fa-heart fs-19`}
						></i>
					</button>
					{tweet.likes.length > 0 && <span className='ms-1 mt-1'>{tweet.likes.length}</span>}
				</div>
				<button className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'>
					<i className='fa-solid fa-arrow-up-from-bracket fs-19 '></i>
				</button>
			</footer>
		</section>
	);
};

export default Tweet;
