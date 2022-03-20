import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../common/Avatar'
import FollowUnfollowBtn from './FollowUnfollowBtn'
interface Iprops {
	user: any
}

const SuggestedUserSidebar = ({ user }: Iprops) => {
	return (
		<div className='p-12px rounded-2 d-flex justify-content-between align-items-center hover-bg-secondary'>
			<Link to={`/profile/${user._id}`} className='d-flex align-items-center'>
				<Avatar avatar={user.avatar} />
				<span className='fs-14 fw-medium'>{user.name}</span>
			</Link>
			
			<FollowUnfollowBtn user={user} />
		</div>
	);
};

export default SuggestedUserSidebar