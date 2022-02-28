import React from 'react';

interface Iprops {
	profileUser: any;
	currentUser: any;
}

const ProfileCover = ({ profileUser, currentUser }: Iprops) => {
	return (
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

				{currentUser && currentUser._id === profileUser._id && (
					<button
						className='btn btn-outline-secondary text-dark  float-end'
						style={{ marginTop: '-62px', marginRight: '20px' }}
						data-bs-toggle='modal'
						data-bs-target='#exampleModal'
					>
						Edit Profile
					</button>
				)}
			</div>
		</div>
	);
};

export default ProfileCover;
