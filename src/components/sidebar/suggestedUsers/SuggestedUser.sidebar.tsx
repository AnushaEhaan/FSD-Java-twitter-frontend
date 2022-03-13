import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../common/Avatar'
import { followUser } from '../../../store/actions/profileInfo.action';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

interface Iprops {
	user: any
}

const SuggestedUserSidebar = ({ user }: Iprops) => {
	const dispatch = useDispatch();
	const handleFollowUser = (id: string) => {
		dispatch(followUser(id));
	};
	const currentUserId = Cookies.get('user_Id');

	return (
		<div className='p-12px rounded-2 d-flex justify-content-between align-items-center hover-bg-secondary'>
			<Link to={`/profile/${user._id}`} className='d-flex align-items-center'>
				<Avatar avatar={user.avatar} />
				<span className='fs-14 fw-medium'>{user.name}</span>
			</Link>
			<button
				className={`btn ${
					user.followers.includes(currentUserId)
						? 'btn-outline-secondary text-dark border-dark'
						: 'btn-dark'
				} btn-sm`}
				onClick={() => handleFollowUser(user._id)}
			>
				{user.followers.includes(currentUserId) ? 'Unfollow' : 'Follow'}
			</button>
		</div>
	);
};

export default SuggestedUserSidebar