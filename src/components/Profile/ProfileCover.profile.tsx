import React from 'react';
import { followUser } from "../../store/actions/profileInfo.action"
import { useDispatch, useSelector } from 'react-redux';
import EditProfileModel from '../../components/Profile/EditProfileModel.profile';

interface Iprops {
	profileUser: any;
	currentUser: any;
}

const ProfileCover = ({ profileUser, currentUser }: Iprops) => {
	const dispatch = useDispatch();
	const handleFollowUser = (id:string) => {
		dispatch(followUser(id));
	}

	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className='position-relative'>
				<div>
					{profileUser.cover ? (
						<img
							src={profileUser.cover}
							className='w-100 h-sm bg-secondary object-cover'
							alt=''
						/>
					) : (
						<div className='w-100 h-sm bg-secondary'></div>
					)}
				</div>

				<div className='position-relative' style={{ marginTop: '-50px', zIndex: '2' }}>
					<div>
						{profileUser.avatar ? (
							<img
								src={profileUser.avatar}
								className='h-122px border border-white   border-4 w-122px rounded-circle'
								alt=''
							/>
						) : (
							<div className='h-122px border border-white bg-secondary  border-4 w-122px rounded-circle'></div>
						)}
					</div>

					{currentUser && currentUser._id === profileUser._id ? (
						<button
							className='btn btn-outline-secondary text-dark  float-end'
							style={{ marginTop: '-55px', marginRight: '20px' }}
							onClick={handleShow}
						>
							Edit Profile
						</button>
					) : (
						<button
							className={`${
								profileUser.followers.includes(currentUser._id)
									? 'btn-outline-secondary text-dark'
									: 'btn-dark text-white'
							} btn px-4  float-end `}
							style={{ marginTop: '-55px', marginRight: '20px' }}
							onClick={() => handleFollowUser(profileUser._id)}
						>
							{profileUser.followers.includes(currentUser._id) ? 'Unfollow' : 'Follow'}
						</button>
					)}
				</div>
			</div>
			<EditProfileModel user={profileUser} handleClose={handleClose} show={show} />
		</>
	);
};

export default ProfileCover;
