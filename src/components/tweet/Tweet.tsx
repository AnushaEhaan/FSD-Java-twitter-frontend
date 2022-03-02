import Cookies from 'js-cookie';
import moment from 'moment';
import React, { useState } from 'react';
import TweetDropDownMenu from './TweetDropDownMenu.tweet';
import { likeTweet, retweet } from '../../store/actions/tweets.action';
import { findUserById } from '../../store/actions/profileInfo.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetContent from './TweetContent';
import Avatar from "../common/Avatar"

interface Iprops {
	tweet: any;
	handleTweet?: any;
}

const Tweet = ({ tweet,handleTweet }: Iprops) => {
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
		setWhoRetweeted('')
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
		<section className='border-bottom py-4 d-flex'>
			<div>
				<Link to={`/profile/${tweet.user._id}`}>
					<Avatar avatar={tweet.user.avatar} />
				</Link>
			</div>
			<main className='w-100'>
				<header className='d-flex justify-content-between align-items-start'>
					<div className='d-flex'>
						<div>
							<div className='mb-1px d-flex'>
								<Link to={`/profile/${tweet.user._id}`} className='fw-bold me-3 fs-16 mb-0'>
									{tweet.user.name}
								</Link>
								{whoRetweeted && (
									<div className='text-dark text-opacity-75 mt-2px'>
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

				<TweetContent tweet={tweet} />

				<footer className='d-flex  justify-content-between '>
					<div className='d-flex align-items-center'>
						<button
							className='btn btn-outline-secondary me-4 text-dark text-opacity-50 border-0 w-40px h-40px center'
							onClick={() => handleTweet(tweet)}
						>
							<i className='fa-regular fa-comment fs-18 '></i>
						</button>
						<button
							className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'
							onClick={() => handleRetweet(tweet._id)}
						>
							<i
								className={`fa-solid  fa-retweet fs-18 ${
									tweet.retweetedBy.includes(currentUserId) && 'text-success'
								} `}
							></i>
						</button>
						<span className={`${tweet.retweetedBy.includes(currentUserId) && 'text-success'}`}>
							{tweet.retweetedBy.length > 0 && tweet.retweetedBy.length}
						</span>
						<button
							className='btn btn-outline-secondary ms-4 text-dark text-opacity-50 border-0 w-40px h-40px center'
							onClick={() => handleLike(tweet._id)}
						>
							<i
								className={`fa-${
									tweet.likes.includes(currentUserId) ? 'solid text-danger' : 'regular'
								}  fa-heart fs-18`}
							></i>
						</button>
						{tweet.likes.length > 0 && (
							<span
								className={`${tweet.likes.includes(currentUserId) && 'text-danger'} ms-1 mt-1`}
							>
								{tweet.likes.length}
							</span>
						)}
					</div>
					<button className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'>
						<i className='fa-solid fa-arrow-up-from-bracket fs-18 '></i>
					</button>
				</footer>
			</main>
		</section>
	);
};

export default Tweet;
