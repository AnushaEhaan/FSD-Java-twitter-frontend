import Cookies from 'js-cookie';
import moment from 'moment';
import React, { useState } from 'react';
import TweetDropDownMenu from './TweetDropDownMenu.tweet';
import { likeTweet, retweet, addBookmark } from '../../store/actions/tweets.action';
import { findUserById } from '../../store/actions/profileInfo.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TweetContent from './TweetContent';
import Avatar from '../common/Avatar';
import Spinner from '../common/Spinner';

interface Iprops {
	tweet: any;
	handleTweet?: any;
	hideCommentBtn?: boolean;
}

const Tweet = ({ tweet, handleTweet, hideCommentBtn }: Iprops) => {
	const params = useParams();
	const currentUserId = Cookies.get('user_Id');
	const { currentUser } = useSelector((state: any) => state.user);
	const [whoRetweeted, setWhoRetweeted] = useState('');
	const [loadingOnBookMark, setLoadingOnBookMark] = useState(false);
	const dispatch = useDispatch();
	const handleLike = (tweetId: string) => {
		dispatch(likeTweet(tweetId));
	};

	const handleRetweet = (tweetId: string) => {
		dispatch(retweet(tweetId));
	};

	const handleBookmark = async (tweetId: string) => {
		setLoadingOnBookMark(true);
		const isBookmarked = await dispatch(addBookmark(tweetId));
		setLoadingOnBookMark(false);
	};

	React.useEffect(() => {
		setWhoRetweeted('');
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
					<TweetDropDownMenu userId={tweet.user._id} userName={tweet.user.name} tweetId={tweet._id}  />
				</header>
				<Link to={`/tweet/${tweet._id}`}>
					<TweetContent tweet={tweet} />
				</Link>
				<footer className='d-flex  justify-content-between '>
					<div className='d-flex align-items-center'>
						{!hideCommentBtn && (
							<div className='me-4 d-flex align-items-center'>
								<button
									className='btn btn-outline-secondary text-dark text-opacity-50 border-0 me-1px w-40px h-40px center'
									onClick={() => handleTweet(tweet)}
								>
									<i className='fa-regular fa-comment fs-18 '></i>
								</button>
								<span>{tweet.comments.length > 0 && tweet.comments.length}</span>
							</div>
						)}
						<button
							className='btn btn-outline-secondary text-dark text-opacity-50  me-2px border-0 w-40px h-40px center'
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
					<button
						className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'
						onClick={() => handleBookmark(tweet._id)}
						disabled={loadingOnBookMark}
					>
						{loadingOnBookMark ? (
							<Spinner size='sm' />
						) : (
							<i
								className={`fa-${
									tweet.bookmarks.includes(currentUserId) ? 'solid' : 'regular'
								} fa-bookmark fs-18 `}
							></i>
						)}
					</button>
				</footer>
			</main>
		</section>
	);
};

export default Tweet;
