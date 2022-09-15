import Cookies from 'js-cookie'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	addBookmark,
	likeTweet,
	retweet,
} from '../../store/actions/tweets.action'
import Spinner from '../reusable/Spinner'

interface TweetActionsProps {
	tweet: any
	handleSetTweet: (tweet: any) => void
	isCommentBtnHidden?: boolean
}

const TweetActions = ({
	tweet,
	handleSetTweet,
	isCommentBtnHidden,
}: TweetActionsProps) => {
	const currentUserId = Cookies.get('user_Id')
	const dispatch = useDispatch()
	const [loadingOnBookMark, setLoadingOnBookMark] = useState(false)

	const handleTweetLike = (tweetId: string) => {
		dispatch(likeTweet(tweetId))
	}

	const handleRetweet = (tweetId: string) => {
		dispatch(retweet(tweetId))
	}

	const handleTweetBookmark = async (tweetId: string) => {
		setLoadingOnBookMark(true)
		await dispatch(addBookmark(tweetId))
		setLoadingOnBookMark(false)
	}

	return (
		<footer className='d-flex  justify-content-between '>
			<div className='d-flex align-items-center'>
				{!isCommentBtnHidden && (
					<div className='me-4 d-flex align-items-center'>
						<button
							className='btn btn-outline-secondary text-dark text-opacity-50 border-0 me-1px w-40px h-40px center'
							onClick={() => handleSetTweet(tweet)}>
							<i className='fa-regular fa-comment fs-18 '></i>
						</button>
						<span>
							{tweet.comments.length > 0 && tweet.comments.length}
						</span>
					</div>
				)}
				<button
					className='btn btn-outline-secondary text-dark text-opacity-50  me-2px border-0 w-40px h-40px center'
					onClick={() => handleRetweet(tweet._id)}>
					<i
						className={`fa-solid  fa-retweet fs-18 ${
							tweet.retweetedBy.includes(currentUserId) &&
							'text-success'
						} `}></i>
				</button>
				<span
					className={`${
						tweet.retweetedBy.includes(currentUserId) &&
						'text-success'
					}`}>
					{tweet.retweetedBy.length > 0 && tweet.retweetedBy.length}
				</span>
				<button
					className='btn btn-outline-secondary ms-4 text-dark text-opacity-50 border-0 w-40px h-40px center'
					onClick={() => handleTweetLike(tweet._id)}>
					<i
						className={`fa-${
							tweet.likes.includes(currentUserId)
								? 'solid text-danger'
								: 'regular'
						}  fa-heart fs-18`}></i>
				</button>
				{tweet.likes.length > 0 && (
					<span
						className={`${
							tweet.likes.includes(currentUserId) && 'text-danger'
						} ms-1 mt-1`}>
						{tweet.likes.length}
					</span>
				)}
			</div>
			<button
				className='btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center'
				onClick={() => handleTweetBookmark(tweet._id)}
				disabled={loadingOnBookMark}>
				{loadingOnBookMark ? (
					<Spinner size='sm' />
				) : (
					<i
						className={`fa-${
							tweet.bookmarks.includes(currentUserId)
								? 'solid'
								: 'regular'
						} fa-bookmark fs-18 `}></i>
				)}
			</button>
		</footer>
	)
}

export default TweetActions
