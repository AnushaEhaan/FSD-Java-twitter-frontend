import React from 'react';

const PostTweet = () => {
	const [postImage, setPostImage] = React.useState<any>(null);

	const handlePostImage = (e: any) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				setPostImage(reader.result);
			};
		}
	};

	const handleCancelImage = () => {
		setPostImage(null);
	};

	return (
		<section className='border-bottom p-3 mt-2'>
			<header className='d-flex  pb2 align-items-start'>
				<div>
					<img
						src='https://pbs.twimg.com/profile_images/1151890543162646528/RG-t6m7R_400x400.jpg'
						alt=''
						className='w-45px h-45px rounded-circle'
					/>
				</div>
				<div className='w-100 ms-1'>
					<textarea
						className='form-control border-0 fs-18 h-50px'
						placeholder="What's happening?"
						maxLength={140}
					></textarea>
					{postImage && (
						<div className='position-relative'>
							<img src={postImage} className='w-100 h-md mt-4 rounded-3' alt='' />
							<button
								className='btn h-34px w-34px center bg-dark bg-opacity-75 text-white position-absolute start-5px top-24px'
								onClick={handleCancelImage}
							>
								<i className='fa-solid fa-xmark fs-16'></i>
							</button>
						</div>
					)}
					<footer className='d-flex justify-content-between align-items-center mt-5'>
						<section>
							<label className='btn border center py-2'>
								<i className='fa-solid fs-19 fa-image'></i>
								<input type='file' className='d-none' onChange={handlePostImage} />
							</label>
						</section>
						<button className='btn btn-dark text-white px-4 text-dark py-2'>Tweet</button>
					</footer>
				</div>
			</header>
		</section>
	);
};

export default PostTweet;
