import React from 'react'
import EditProfileModel from '../Profile/EditProfileModel.profile';
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

			<div className='mt-4'>
				<h3>Safdar Azeem</h3>
				<p>
					CEO (Haier & Ruba) Chairman (Peshawar Zalmi, Benoni Zalmi & Zalmi Foundation). Sitar
					e Imtiaz.
				</p>
				<section className='d-flex flex-wrap mt-4'>
					<div className='me-6 mb-4'>
						<i className='fa-solid fa-location-pin me-2'></i>
						<span>Pakistan</span>
					</div>
					<div className='me-6 mb-4'>
						<i className='fa-solid fa-link me-2'></i>
						<span>www.safdarazeem.com</span>
					</div>
					<div className='me-6 mb-4'>
						<i className='fa-solid fa-clock me-2'></i>
						<span>Born August 14, 1985</span>
					</div>
					<div className='me-6 mb-4'>
						<i className='fa-solid fa-calendar-days me-2'></i>
						<span>Joined May 2012</span>
					</div>
				</section>

				<section>
					<span className='me-3'>
						<b>185</b> Following
					</span>
					<span>
						<b>185</b> Followers
					</span>
				</section>
			</div>
			<EditProfileModel />
		</div>
	);
}

export default ProfileCover