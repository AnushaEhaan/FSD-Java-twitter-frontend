import React from 'react'
import { getTweetsLikeByUser } from '../../store/actions/tweets.action'
import { useDispatch, useSelector } from 'react-redux'
import TweetList from '../tweet/TweetList'
import { useParams } from 'react-router'

const ProfileLikes = () => {
	const params = useParams()
	const { id }: any = params
	const dispatch = useDispatch()
	const { tweets, loading: tweetLoading } = useSelector(
		(state: any) => state.tweets
	)
	React.useEffect(() => {
		dispatch(getTweetsLikeByUser(id))
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

export default ProfileLikes
