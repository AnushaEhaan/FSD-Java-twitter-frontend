import React from 'react';

interface Iprops {
	handleAvatar: (avatar: string) => void;
}

const EditProfileCover = ({ handleAvatar }: Iprops) => {
	const [selectedAvatar, setSelectedAvatar] = React.useState<any>(null);

	const handleAvatarChange = (e: any) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				setSelectedAvatar(reader.result);
				handleAvatar(file);
			};
		}
	};

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
						src={selectedAvatar}
						className='rounded-circle border-white w-100 h-100  border-4 bg-white'
						alt=''
					/>
					<div className='bg-dark center rounded-circle position-absolute w-100 top-0 h-100 bg-opacity-10'>
						<label
							className='btn bg-secondary bg-opacity-10 w-40px h-40px center'
							style={{ zIndex: '0' }}
						>
							<i className='fa-solid fa-image  fs-20'></i>
							<input type='file' className='d-none' onChange={handleAvatarChange} />
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileCover;
