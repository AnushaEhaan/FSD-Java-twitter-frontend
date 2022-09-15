import { useSelector } from 'react-redux'
import TweetComment from './TweetComment'

const TweetCommentList = () => {
	const { comments } = useSelector((state: any) => state.comments)
	return (
		<div>
			<h4>Comments {comments.length} </h4>
			{comments.length > 0 &&
				comments.map((comment: any) => (
					<div key={comment._id}>
						<TweetComment comment={comment} />
					</div>
				))}
		</div>
	)
}

export default TweetCommentList
