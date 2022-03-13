import React, { useState } from 'react';
import moment from 'moment'; 
import FollwersOrFollowingModel from "./FollwersOrFollowingModel.profile";
import { getUserFollwersOrFollowing } from "../../store/actions/userFollwersOrFollowing.action"
import { useDispatch } from 'react-redux';

interface Iprops {
	user: any;
}

const ProfileInfo = ({ user }: Iprops) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [type, setType] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = (type:string) => {
		setType(type);
		dispatch(getUserFollwersOrFollowing(user._id, type, 1, 5));
		setShow(true);
	};

	return (
		<div>
			<div className='mt-4'>
				<h3>{user?.name}</h3>
				<p>{user?.bio}</p>
				<section className='d-flex flex-wrap mt-4'>
					{user.location && (
						<div className='me-6 mb-4'>
							<i className='fa-solid fa-location-pin me-2'></i>
							<span>{user?.location}</span>
						</div>
					)}
					{user?.website && (
						<div className='me-6 mb-4'>
							<i className='fa-solid fa-link me-2'></i>
							<a href={user?.website} target='_blank'>
								{user?.website}
							</a>
						</div>
					)}
					{user?.date_Of_birth && (
						<div className='me-6 mb-4'>
							<i className='fa-solid fa-clock me-2'></i>
							<span>Born {moment(user?.date_Of_birth).format('LL')}</span>
						</div>
					)}
					{user?.date_Created && (
						<div className='me-6 mb-4'>
							<i className='fa-solid fa-calendar-days me-2'></i>
							<span>Joined {moment(user?.date_Created).format('MMM YYYY')}</span>
						</div>
					)}
				</section>

				<section className='mt-2'>
					<span className='me-3' onClick={() => handleShow('following')}>
						<b>{user?.following.length}</b> Following
					</span>
					<span onClick={() => handleShow('followers')}>
						<b>{user?.followers.length}</b> Followers
					</span>
				</section>
			</div>
			<FollwersOrFollowingModel
				type={type}
				handleClose={handleClose}
				show={show}
				user={user}
			/>
		</div>
	);
};

export default ProfileInfo;
