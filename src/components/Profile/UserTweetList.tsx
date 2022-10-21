import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getUserTweets } from '../../store/actions/tweets.action'
import { IRootState } from '../../types/store/IRootState.type'
import TweetList from '../tweet/TweetList'

const UserTweetList = () => {
	const params = useParams()
	const { id }: any = params
	const dispatch = useDispatch()
	const { tweets, loading: tweetLoading } = useSelector(
		(state: IRootState) => state.tweets
	)
	React.useEffect(() => {
		dispatch(getUserTweets(id))
	}, [])

	return (
		<div className='mt-5'>
			<div>
				<TweetList
					tweets={tweets}
					loading={tweetLoading}
				/>
			</div>
		</div>
	)
}

export default UserTweetList
