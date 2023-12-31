import Cookies from 'js-cookie'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Spinner from '../reusable/Spinner'
import { ITweet } from '../../types/tweet.type'
import { addBookmark, likeTweet, retweet } from '../../store/actions/tweets.action'

interface TweetActionsProps {
   tweet: ITweet
   handleSetTweet: (tweet: ITweet) => void
   isCommentBtnHidden?: boolean
}

const TweetActions = ({ tweet, handleSetTweet, isCommentBtnHidden }: TweetActionsProps) => {
   const [likes, setLikes] = useState<string[]>(tweet.likes)

   const currentUserId = Cookies.get('user_Id')
   const dispatch = useDispatch()
   const [loadingOnBookMark, setLoadingOnBookMark] = useState(false)

   const handleTweetLike = (tweetId: string) => {
      dispatch(likeTweet(tweetId))

      if (likes.includes(currentUserId as string)) {
         return setLikes(likes.filter((like) => like !== currentUserId))
      }
      setLikes([...likes, currentUserId as string])
   }

   const handleRetweet = () => {
      dispatch(retweet(tweet))
   }

   const handleTweetBookmark = async (tweetId: string) => {
      setLoadingOnBookMark(true)
      await dispatch(addBookmark(tweetId))
      setLoadingOnBookMark(false)
   }

   return (
      <footer className="d-flex  justify-content-between ">
         <div className="d-flex align-items-center">
            {!isCommentBtnHidden && (
               <div className="me-4 d-flex align-items-center">
                  <button
                     className="btn btn-outline-secondary text-dark text-opacity-50 border-0 me-1px w-40px h-40px center"
                     onClick={() => handleSetTweet(tweet)}>
                     <i className="fa-regular fa-comment fs-18 "></i>
                  </button>
                  <span>{tweet.comments.length > 0 && tweet.comments.length}</span>
               </div>
            )}
            <button
               className="btn btn-outline-secondary text-dark text-opacity-50  me-2px border-0 w-40px h-40px center"
               onClick={handleRetweet}>
               <i
                  className={`fa-solid  fa-retweet fs-18 ${
                     tweet.retweetedBy.includes(currentUserId as string) && 'text-success'
                  } `}></i>
            </button>
            <span className={`${tweet.retweetedBy.includes(currentUserId as string) && 'text-success'}`}>
               {tweet.retweetedBy.length > 0 && tweet.retweetedBy.length}
            </span>
            <button
               className="btn btn-outline-secondary ms-4 text-dark text-opacity-50 border-0 w-40px h-40px center"
               onClick={() => handleTweetLike(tweet._id)}>
               <i
                  className={`fa-${
                     likes.includes(currentUserId as string) ? 'solid text-danger' : 'regular'
                  }  fa-heart fs-18`}></i>
            </button>
            {likes.length > 0 && (
               <span className={`${likes.includes(currentUserId as string) && 'text-danger'} ms-1 mt-1`}>
                  {likes.length}
               </span>
            )}
         </div>
         <button
            className="btn btn-outline-secondary text-dark text-opacity-50 border-0 w-40px h-40px center"
            onClick={() => handleTweetBookmark(tweet._id)}
            disabled={loadingOnBookMark}>
            {loadingOnBookMark ? (
               <Spinner size="sm" />
            ) : (
               <i
                  className={`fa-${
                     tweet.bookmarks.includes(currentUserId as string) ? 'solid' : 'regular'
                  } fa-bookmark fs-18 `}></i>
            )}
         </button>
      </footer>
   )
}

export default TweetActions
