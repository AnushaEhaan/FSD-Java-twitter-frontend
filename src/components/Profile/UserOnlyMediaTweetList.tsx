import React from 'react'
import { useParams } from 'react-router'
import TweetList from '../tweet/TweetList'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../types/store/IRootState.type'
import { getOnlyMediaTweets } from '../../store/actions/tweets.action'

const UserOnlyMediaTweetList = () => {
   const params = useParams()
   const { id }: any = params
   const dispatch = useDispatch()
   const { tweets, loading: tweetLoading } = useSelector((state: IRootState) => state.tweets)

   React.useEffect(() => {
      dispatch(getOnlyMediaTweets(id))
   }, [])

   return (
      <div className="mt-5">
         <TweetList tweets={tweets} loading={tweetLoading} />
      </div>
   )
}

export default UserOnlyMediaTweetList
