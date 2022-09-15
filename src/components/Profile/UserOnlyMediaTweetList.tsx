import React from 'react'
import { getOnlyMediaTweets } from '../../store/actions/tweets.action'
import { useDispatch, useSelector } from 'react-redux'
import TweetList from '../tweet/TweetList'
import { useParams } from 'react-router'

const UserOnlyMediaTweetList = () => {
	const params = useParams()
	const { id }: any = params
	const dispatch = useDispatch()
	const { tweets, loading: tweetLoading } = useSelector(
		(state: any) => state.tweets
	)
	React.useEffect(() => {
		dispatch(getOnlyMediaTweets(id))
	}, [])

	return (
		<div className='mt-5'>
			<TweetList
				tweets={tweets}
				loading={tweetLoading}
			/>
		</div>
	)
}

export default UserOnlyMediaTweetList
