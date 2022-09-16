import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TweetCreate from '../../components/tweet/TweetCreate'
import TweetList from '../../components/tweet/TweetList'
import { getTweets } from '../../store/actions/tweets.action'

const Dashboard = () => {
	const dispatch = useDispatch()
	const { tweets, loading } = useSelector((state: any) => state.tweets)

	React.useEffect(() => {
		const userId = Cookies.get('user_Id')
		userId && dispatch(getTweets(userId))
	}, [dispatch])

	return (
		<div>
			<TweetCreate />
			<div className='mx-md-4 mt-5'>
				<TweetList
					tweets={tweets}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export default Dashboard
