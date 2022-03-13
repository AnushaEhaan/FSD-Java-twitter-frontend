import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../common/Avatar'

interface Iprops {
	user: any
}

const SuggestedUserSidebar = ({user}:any) => {
  return (
		<div className='p-3 rounded-2 d-flex justify-content-between align-items-center hover-bg-secondary'>
			<Link to={`/profile/${user._id}`} className='d-flex align-items-center'>
				<Avatar avatar={user.avatar} />
				<span className='fs-14 fw-medium'>{user.name}</span>
			</Link>
			<button className='btn btn-dark btn-sm'>Follow</button>
		</div>
	);
}

export default SuggestedUserSidebar