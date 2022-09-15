import React from 'react'
import TweetContent from './TweetContent'
import moment from 'moment'
import Avatar from '../reusable/Avatar'

interface Iprops {
	tweet: any
}

const TweetForComment = ({ tweet }: Iprops) => {
	return (
		<div className='d-flex w-100'>
			<div className='center flex-column me-3'>
				<Avatar avatar={tweet.user.avatar} />
				<div className='border w-2px rounded  h-100 mt-2'></div>
			</div>
			<div className='w-100'>
				<div className='mb-1px d-flex'>
					<p className='fw-bold me-3 fs-16 mb-0'>{tweet.user.name}</p>
				</div>
				<span className='fs-13 text-dark text-opacity-75 me-2'>
					{moment(tweet.createdAt).fromNow()}
				</span>
				<i
					className={`fa-solid ${
						tweet.is_Public ? ' fa-globe' : ' fa-lock'
					}  fs-12 text-dark text-opacity-50 `}></i>
				<TweetContent tweet={tweet} />
			</div>
		</div>
	)
}

export default TweetForComment
