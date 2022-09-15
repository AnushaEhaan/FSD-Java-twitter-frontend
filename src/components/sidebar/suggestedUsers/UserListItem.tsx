import { Link } from 'react-router-dom'
import Avatar from '../../reusable/Avatar'
import UserFollowUnfollowBtn from './UserFollowUnfollowBtn'
interface Iprops {
	user: any
}

const UserListItem = ({ user }: Iprops) => {
	return (
		<div className='p-12px rounded-2 d-flex justify-content-between align-items-center hover-bg-secondary'>
			<Link
				to={`/profile/${user._id}`}
				className='d-flex align-items-center'>
				<Avatar avatar={user.avatar} />
				<span className='fs-14 fw-medium'>{user.name}</span>
			</Link>

			<UserFollowUnfollowBtn user={user} />
		</div>
	)
}

export default UserListItem
