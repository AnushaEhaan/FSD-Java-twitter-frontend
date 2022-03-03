import React from 'react';
import Comment from './Comment.tweet';
import { useDispatch, useSelector } from 'react-redux';


const TweetCommentGroup = () => {
	 const { comments } = useSelector((state: any) => state.comments);
	return (
		<div>
			<h4>Comments {comments.length} </h4>
			{comments.length > 0 &&
				comments.map((comment: any) => {
					return (
						<div key={comment._id}>
							<Comment comment={comment} />
						</div>
					);
				})}
		</div>
	);
};

export default TweetCommentGroup;
