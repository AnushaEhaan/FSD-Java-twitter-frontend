import React from 'react';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import Spinner from '../common/Spinner';
import { addTweet } from '../../store/actions/tweets.action';
import { useDispatch, useSelector } from 'react-redux';
import stringUtils from "../../utils/string.utils";

const PostTweet = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state:any) => state.user);
	const [content, setConent] = React.useState('');
	const [readableImage, setReadableImage] = React.useState<any>(null);
	const [imageForUpload, setImageForUpload] = React.useState<any>(null);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [isPublic, setIsPublic] = React.useState<boolean>(true);
	

	const handlePostImage = (e: any) => {
		const file = e.target.files[0];
		setImageForUpload(file);
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				setReadableImage(reader.result);
			};
		}
	};

	const handleCancelImage = () => {
		setReadableImage(null);
		setImageForUpload(null);
	};

	const uploadPhoto = async (postImage: any) => {
		try {
			const formData = new FormData();
			formData.append('image', postImage);
			const response = await axios.post('tweet/uploadPhoto', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			const data = await response.data;
			return data;
		} catch (error) {
			return error;
		}
	};

	const uploadTrend = async (trend: any) => {
		try {
			const response = await axios.post('/trend/add', { name: trend });
			const data = await response.data;
			return data.trend._id;
		} catch (error) {
			return error;
		}
	};


	const uploadTweet = async () => {
		const userId = Cookies.get('user_Id');
		try {
			setLoading(true);
			const formData: any = {
				content,
				user: userId,
				is_Public: isPublic,
			};
			if (imageForUpload) {
				const data = await uploadPhoto(imageForUpload);
				data.src && (formData.photo = data.src);
			}

			if (stringUtils.extractTrends(content).length > 0) {
				const data = await stringUtils.extractTrends(content).map(async (trend: any) => {
					const id = await uploadTrend(trend);
					return id;
				})
				formData.trends = await Promise.all(data);
			}

			const response = await axios.post('/tweet/upload', formData);
			const data = await response.data;
			data.status == 200 && toast.success(data.message);
			setLoading(false);
			setConent('');
			handleCancelImage();
			setIsPublic(true);

			const tweet = {
				...data.tweet,
				user: currentUser,
			};

			dispatch(addTweet(tweet));
		} catch (error: any) {
			toast.error(error?.response.data.message);
			setLoading(false);
		}
	};

	return (
		<section className='border-bottom p-3 mt-2 position-relative'>
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
						value={content}
						onChange={(e) => setConent(e.target.value)}
						maxLength={140}
					></textarea>
					{readableImage && (
						<div className='position-relative'>
							<img src={readableImage} className='w-100 h-md mt-4 rounded-3' alt='' />
							<button
								className='btn h-34px w-34px center bg-dark bg-opacity-75 text-white position-absolute start-5px top-24px'
								onClick={handleCancelImage}
							>
								<i className='fa-solid fa-xmark fs-16'></i>
							</button>
						</div>
					)}
					<footer className='d-flex justify-content-between align-items-center mt-5'>
						<section className='d-flex'>
							<label className='btn border center py-2 me-3'>
								<i className='fa-solid fs-19 fa-image'></i>
								<input type='file' className='d-none' onChange={handlePostImage} />
							</label>
							<PostDropdown setIsPublic={setIsPublic} />
						</section>
						<button
							className='btn btn-dark text-white px-4 text-dark py-2'
							disabled={loading || (!imageForUpload && !content)}
							onClick={uploadTweet}
						>
							{loading ? <Spinner size='sm' /> : 'Tweet'}
						</button>
					</footer>
				</div>
			</header>
			{loading && (
				<div className='position-absolute bg-secondary bg-opacity-10 h-100 w-100 top-0 start-0'></div>
			)}
		</section>
	);
};

const PostDropdown = (props: any) => {
	const [value, setValue] = React.useState(0);

	interface Option {
		title: string;
		icon: string;
	}

	const options: Option[] = [
		{
			title: 'Public',
			icon: 'fa-solid fa-globe',
		},
		{
			title: 'Only Me',
			icon: 'fa-solid fa-lock',
		},
	];
	const initialOptions = (option: Option) => (
		<div>
			<i className={`${option.icon} me-2`}></i>
			<span>{option.title}</span>
		</div>
	);

	const handleState = (index: number) => {
		setValue(index);
		props.setIsPublic(index === 0);
	};

	return (
		<div className='dropdown px-0'>
			<button
				className='btn btn-outline-secondary text-dark dropdown-toggle pe-5'
				type='button'
				id='dropdownMenuButton1'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				{initialOptions(options[value])}
			</button>
			<ul
				className='dropdown-menu'
				style={{ minWidth: '100px' }}
				aria-labelledby='dropdownMenuButton1'
			>
				{options.map((option: Option, index) => (
					<li key={index} className='dropdown-item py-2' onClick={() => handleState(index)}>
						<i className={`${option.icon} me-3`}></i>
						<span>{option.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostTweet;
