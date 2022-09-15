import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TweetList from '../../components/tweet/TweetList'
import { getBookmarks } from '../../store/actions/tweets.action'

const Bookmarks = () => {
	const dispatch = useDispatch()
	const { tweets, loading } = useSelector((state: any) => state.tweets)

	useEffect(() => {
		dispatch(getBookmarks())
	}, [])

	return (
		<div>
			<div className='mx-md-4 py-md-5 pt-1'>
				<h4 className='fs-21 mb-5'>Bookmarks</h4>
				<TweetList
					tweets={tweets}
					loading={loading}
					error='No Bookmarks yet'
				/>
			</div>
		</div>
	)
}

export default Bookmarks
