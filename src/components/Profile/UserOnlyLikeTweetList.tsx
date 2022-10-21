import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getTweetsLikeByUser } from '../../store/actions/tweets.action'
import TweetList from '../tweet/TweetList'
import { IRootState } from '../../types/store/IRootState.type'

const UserOnlyLikeTweetList = () => {
	const params = useParams()
	const { id }: any = params
	const dispatch = useDispatch()
	const { tweets, loading: tweetLoading } = useSelector(
		(state: IRootState) => state.tweets
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

export default UserOnlyLikeTweetList
