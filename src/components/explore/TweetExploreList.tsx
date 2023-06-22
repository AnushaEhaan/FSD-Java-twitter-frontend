import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import Spinner from '../reusable/Spinner'
import TweetExplore from './TweetExplore'
import axios from '../../config/axios.config'
import { ITweet } from '../../types/tweet.type'

const TweetExploreList = () => {
   const [tweets, setTweets] = useState<ITweet[]>([])
   const [loading, setLoading] = useState(false)

   React.useEffect(() => {
      const userId = Cookies.get('user_Id')
      const getExploreTweets = async () => {
         try {
            setLoading(true)
            const response = await axios.get(`/tweet/exploreTweets/${userId}`)
            const data = await response.data
            setTweets(data.tweets)
            setLoading(false)
         } catch (err: any) {
            setLoading(false)
            toast.error(err.response.data.message)
         }
      }
      getExploreTweets()
   }, [])

   if (loading) return <Spinner height="15vh" />

   const renderTweets = (tweets: ITweet[]) => {
      return (
         tweets.length > 0 &&
         tweets.map((tweet: ITweet) => {
            return <TweetExplore key={tweet._id} tweet={tweet} />
         })
      )
   }

   return (
      <div>
         <main className="px-md-3 gap-3 d-flex">
            <section className="w-50 d-flex flex-column gap-3">
               {renderTweets(tweets.slice(0, Math.round(tweets.length / 2)))}
            </section>
            <div className="w-50 d-flex flex-column gap-3">
               {renderTweets(tweets.slice(Math.round(tweets.length / 2)))}
            </div>
         </main>
      </div>
   )
}

export default TweetExploreList
