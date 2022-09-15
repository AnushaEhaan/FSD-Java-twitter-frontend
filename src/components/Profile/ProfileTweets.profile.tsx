import React from 'react'
import TweetList from '../tweet/TweetList'
import { getUserTweets } from '../../store/actions/tweets.action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

const ProfileTweets = () => {
	const params = useParams()
	const { id }: any = params
	const dispatch = useDispatch()
	const { tweets, loading: tweetLoading } = useSelector(
		(state: any) => state.tweets
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

export default ProfileTweets
