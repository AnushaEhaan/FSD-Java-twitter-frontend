import { useSelector } from 'react-redux'
import Avatar from '../reusable/Avatar'

interface Iprops {
	handleChange?: (e: any) => void
	content?: string
}

const TweetCommentCreate = ({ handleChange, content }: Iprops) => {
	const { currentUser } = useSelector((state: any) => state.user)
	return (
		<div className='d-flex align-items-start mt-3'>
			<Avatar avatar={currentUser.avatar} />
			<textarea
				className='form-control mt-1 fs-17 border-0 ps-0 h-40px'
				placeholder='Tweet your reply'
				onChange={handleChange}
				value={content}></textarea>
		</div>
	)
}

export default TweetCommentCreate
