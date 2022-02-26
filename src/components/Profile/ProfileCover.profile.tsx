import React from 'react';
const ProfileCover = () => {
  return (
		<div className='position-relative'>
			<div>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/hellogram-c4311.appspot.com/o/imgs%2F2022-01-30T14%3A22%3A28.018Zimg%20(44).jpg?alt=media&token=8fbc36f6-bd2f-417c-b24b-66d4a0955196'
					className='w-100 h-sm'
					alt=''
				/>
			</div>

			<div className='' style={{ marginTop: '-50px' }}>
				<div>
					<img
						src='https://pbs.twimg.com/profile_images/1151890543162646528/RG-t6m7R_400x400.jpg'
						className='h-122px border border-white   border-4 w-122px rounded-circle'
						alt=''
					/>
				</div>

				<button
					className='btn btn-outline-secondary text-dark  float-end'
					style={{ marginTop: '-62px', marginRight: '20px' }}
					data-bs-toggle='modal'
					data-bs-target='#exampleModal'
				>
					Edit Profile
				</button>
			</div>
		</div>
	);
}

export default ProfileCover