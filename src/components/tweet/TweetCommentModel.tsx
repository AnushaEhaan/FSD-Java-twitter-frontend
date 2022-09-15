import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import TweetForComment from './TweetForComment'
import TweetModelForm from './TweetModelForm'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../store/actions/comment.action'
import Cookies from 'js-cookie'
import Spinner from '../reusable/Spinner'

interface Iprops {
	tweet: any
	show: boolean
	handleModelClose: any
}

const TweetCommentModel = ({ tweet, show, handleModelClose }: Iprops) => {
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
		const isAdded = await dispatch(addComment(data))
		console.log(isAdded)
		setContent('')
		setLoading(false)
		handleModelClose()
	}

	return (
		<div>
			<Modal
				show={show}
				onHide={handleModelClose}
				dialogClassName='mw-lg'>
				<Modal.Header closeButton>
					<Modal.Title>Comment</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<TweetForComment tweet={tweet} />
					<TweetModelForm
						handleChange={handleChange}
						content={content}
					/>
				</Modal.Body>
				<Modal.Footer className='border-0'>
					<Button
						variant='secondary'
						onClick={handleModelClose}>
						Close
					</Button>
					<Button
						variant='dark'
						onClick={handleAddComment}
						className='ms-3'>
						{loading ? <Spinner size='sm' /> : 'Add Comment'}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default TweetCommentModel
