import React, { useEffect } from 'react'
import { getBookmarks } from "../../store/actions/tweets.action"
import { useDispatch, useSelector } from 'react-redux';
import PostTweet from '../../components/dashboard/PostTweet.dashboard';
import TweetGroup from '../../components/tweet/TweetGroup';


const Bookmarks = () => {
    const dispatch = useDispatch()
	const { tweets, loading } = useSelector((state:any) => state.tweets);

    useEffect(() => {
        dispatch(getBookmarks())
    }, [])

    return (
			<div>
				<div className='mx-md-4'>
					<TweetGroup
						tweets={tweets}
						loading={loading}
						error='No Bookmarks yet'
					/>
				</div>
			</div>
		);
}

export default Bookmarks