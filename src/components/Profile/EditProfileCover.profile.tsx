import React from 'react';
const EditProfileCover = () => {
	return (
		<div className='position-relative'>
			<div className='position-relative'>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/hellogram-c4311.appspot.com/o/imgs%2F2022-01-28T10%3A45%3A21.951Zimg%20(30).jpg?alt=media&token=5ed03233-02b9-46ba-9599-89df70f8f741'
					className='w-100 h-sm'
					alt=''
				/>
				<div className='bg-dark position-absolute w-100 top-0 h-100 bg-opacity-25'>
					<button className='btn translate-center-middle  bg-secondary bg-opacity-25 w-50px h-50px center'>
						<i className='fa-solid fa-image  fs-30'></i>
					</button>
				</div>
			</div>

			<div className='position-relative' style={{ marginTop: '-50px', zIndex: '2' }}>
				<div className='position-relative rounded-circle h-122px w-122px '>
					<img
						src='https://pbs.twimg.com/profile_images/1151890543162646528/RG-t6m7R_400x400.jpg'
						className=' border rounded-circle border-white w-100 h-100  border-4 '
						alt=''
					/>
					<div className='bg-dark rounded-circle position-absolute w-100 top-0 h-100 bg-opacity-10'>
						<button className='btn translate-center-middle  bg-secondary bg-opacity-25 w-50px h-50px center'>
							<i className='fa-solid fa-image  fs-30'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileCover;
