import React from 'react'
import Tweet from './Tweet'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import Spinner from '../reusable/Spinner'
import { Button, Modal } from 'react-bootstrap'
import { ITweet } from '../../types/tweet.type'
import TweetCommentCreate from './TweetCommentCreate'
import { addComment } from '../../store/actions/comment.action'

interface Iprops {
   tweet: ITweet
   showCommentModel: boolean
   handleModelClose: any
}

const TweetCommentModal = ({ tweet, showCommentModel, handleModelClose }: Iprops) => {
   const dispatch = useDispatch()
   const userID = Cookies.get('user_Id')
   const [loading, setLoading] = React.useState(false)
   const [content, setContent] = React.useState('')

   const handleChange = (e: any) => {
      setContent(e.target.value)
   }

   const handleAddComment = async () => {
      setLoading(true)
      const data = {
         content,
         tweetId: tweet._id,
         userId: userID,
      }
      await dispatch(addComment(data))
      setContent('')
      setLoading(false)
      handleModelClose()
   }

   return (
      <div>
         <Modal show={showCommentModel} onHide={handleModelClose} dialogClassName="mw-lg">
            <Modal.Header closeButton>
               <Modal.Title>Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Tweet tweet={tweet} />
               <TweetCommentCreate handleChange={handleChange} content={content} />
            </Modal.Body>
            <Modal.Footer className="border-0">
               <Button variant="secondary" onClick={handleModelClose}>
                  Close
               </Button>
               <Button
                  variant="dark"
                  onClick={handleAddComment}
                  disabled={loading || !content}
                  className="ms-3">
                  {loading ? <Spinner size="xsm" /> : 'Add Comment'}
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}

export default TweetCommentModal
