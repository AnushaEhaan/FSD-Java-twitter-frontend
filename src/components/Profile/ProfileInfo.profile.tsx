import React from 'react'


interface Iprops {
	user: any
}

const ProfileInfo = ({ user }: Iprops) => {
	return (
		<div>
			<div className='mt-4'>
				<h3>{user?.name}</h3>
				<p>{user?.bio}</p>
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
		</div>
	);
};

export default ProfileInfo