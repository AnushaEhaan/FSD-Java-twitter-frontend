import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import React, { lazy, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/reusable/Spinner'
import { IRootState } from '../../types/store/IRootState.type'
import { addComment } from '../../store/actions/comment.action'
import { findTweetById } from '../../store/actions/tweets.action'
const TweetContent = lazy(() => import('../../components/tweet/Tweet'))
const TweetCommentList = lazy(() => import('../../components/tweet/TweetCommentList'))
const TweetCommentCreate = lazy(() => import('../../components/tweet/TweetCommentCreate'))

const Tweet = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const userId = Cookies.get('user_Id')
   const [error, setError] = useState('')
   const [content, setContent] = useState('')
   const [loading, setLoading] = useState(false)
   const [addCommentLoading, setAddCommentLoading] = useState(false)
   const { tweet } = useSelector((state: IRootState) => state.tweets)

   React.useEffect(() => {
      async function fetchData() {
         setLoading(true)
         const isTweetFound = id && (await dispatch(findTweetById(id)))
         !isTweetFound && setError('Tweet not found')
         setLoading(false)
      }
      fetchData()
   }, [id])

   const handleChange = (e: any) => {
      setContent(e.target.value)
   }

   const handleAddComment = async () => {
      setAddCommentLoading(true)
      const data = {
         content,
         tweetId: tweet?._id,
         userId,
      }
      const isAdded = await dispatch(addComment(data))
      setContent('')
      setAddCommentLoading(false)
   }

   if (loading) return <Spinner size="sm" height="10vw" />
   if (error) return <div className="center mt-5 fs-17 alert alert-danger w-md mx-auto">{error} ☹️</div>

   return (
      <div className="px-md-4 pt-lg-5 pt-md-3">
         {tweet && <TweetContent tweet={tweet} isCommentBtnHidden={true} />}
         <footer className="mt-3">
            <TweetCommentCreate handleChange={handleChange} content={content} />
            <div className="d-flex justify-content-end  pb-4 mb-5 mt-4 border-bottom">
               <div>
                  <button
                     className="btn ms-4 btn-dark"
                     onClick={handleAddComment}
                     disabled={addCommentLoading}>
                     Comment
                  </button>
               </div>
            </div>
            <TweetCommentList />
         </footer>
      </div>
   )
}

export default Tweet
