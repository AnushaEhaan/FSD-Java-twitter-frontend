import Cookies from 'js-cookie'
import moment from 'moment'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { findUserById } from '../../store/actions/profileInfo.action'
import Avatar from '../reusable/Avatar'
import TweetActionMenu from './TweetActionMenu'
import TweetActions from './TweetActions'
import TweetDetails from './TweetDetails'

interface Iprops {
	tweet: any
	handleSetTweet?: any
	isCommentBtnHidden?: boolean
}

const Tweet = ({ tweet, handleSetTweet, isCommentBtnHidden }: Iprops) => {
	const currentUserId = Cookies.get('user_Id')
	const { currentUser } = useSelector((state: any) => state.user)
	const [whoRetweeted, setWhoRetweeted] = useState('')

	React.useEffect(() => {
		setWhoRetweeted('')
		if (tweet.retweetedBy.length > 0) {
			if (tweet.retweetedBy.includes(currentUserId)) {
				setWhoRetweeted('You')
				return
			}
			currentUser.following.forEach(async (user: any) => {
				if (tweet.retweetedBy.includes(user)) {
					const data = await findUserById(user)
					setWhoRetweeted(data.user.name)
				}
			})
		}
	}, [tweet])

	return (
		<section className='border-bottom pb-4 mb-4'>
			<header className='d-flex w-100'>
				<Link to={`/profile/${tweet.user._id}`}>
					<Avatar avatar={tweet.user.avatar} />
				</Link>
				<section className='d-flex w-100 justify-content-between align-items-start'>
					<section>
						<div className='mb-1px d-flex'>
							<Link
								to={`/profile/${tweet.user._id}`}
								className='fw-bold me-3 fs-16 mb-0'>
								{tweet.user.name}
							</Link>
							{whoRetweeted && (
								<div className='text-dark text-opacity-75 mt-2px'>
									<i className='fa-solid fw-bold fa-retweet fs-13'></i>
									<span className='fs-13 ms-1 fw-bold'>
										{whoRetweeted} Retweeted
									</span>
								</div>
							)}
						</div>
						<span className='fs-13 text-dark text-opacity-75 me-2'>
							{moment(tweet.createdAt).fromNow()}
						</span>
						<i
							className={`fa-solid ${
								tweet.is_Public ? ' fa-globe' : ' fa-lock'
							}  fs-12 text-dark text-opacity-50 `}></i>
					</section>
					<TweetActionMenu
						userId={tweet.user._id}
						userName={tweet.user.name}
						tweetId={tweet._id}
					/>
				</section>
			</header>
			<main className='w-100 ps-sm-7'>
				<TweetDetails tweet={tweet} />
				<TweetActions
					tweet={tweet}
					isCommentBtnHidden={isCommentBtnHidden}
					handleSetTweet={handleSetTweet}
				/>
			</main>
		</section>
	)
}

export default Tweet
