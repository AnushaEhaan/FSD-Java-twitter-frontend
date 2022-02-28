import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import updateProfileJson from '../../JSON/updateProfileForm.json';
import {
	updateUser, updateUserStart, uploadAvatar
} from '../../store/actions/updateUser.action';
import Calendar from '../common/Calendar';
import Spinner from '../common/Spinner';
import EditProfileCover from './EditProfileCover.profile';

interface Iprops {
	user: any;
}

const EditProfileModel = ({ user }: Iprops) => {
	const model = React.useRef<any>(null);

	const dispatch = useDispatch();
	const { loading, isUserUpdated } = useSelector((state: any) => state.updateUser);

	const [date_Of_birth, setDate_Of_birth] = React.useState<any>({
		month: null,
		day: null,
		year: null,
	});
	const handleDate_Of_birth = (date: object) => {
		setDate_Of_birth(date);
	};

	const [avatar, setAvatar] = React.useState<any>(null);
	const [cover, setCover] = React.useState<any>(null);
	const handleAvatarAndCover = ({ state, file }: any) => {
		if (state === 'avatar') {
			setAvatar(file);
		} else if (state === 'cover') {
			setCover(file);
		}
	};

	const [inputFormData, setInputFormData] = React.useState<any>({
		name: user.name || '',
		location: user.location || '',
		website: user.website || '',
		bio: user.bio || '',
	});

	const handleSubmit = async () => {
		const data: any = {
			...inputFormData,
		};

		const date_Of_birth_is_empty = Object.values(date_Of_birth).some(
			(value) => value !== null,
		);
		const all_fields_are_empty = Object.values(date_Of_birth).every((value) => value !== null);

		if (date_Of_birth_is_empty) {
			if (!all_fields_are_empty) {
				toast.error('Please fill all fields of date of birth');
				return;
			} else {
				data.date_Of_birth = `${date_Of_birth.month}/${date_Of_birth.day}/${date_Of_birth.year}`;
			}
		}

		dispatch(updateUserStart());

		if (avatar) {
			const avatarSrcUrl = await uploadAvatar(avatar);
			avatarSrcUrl && (data.avatar = avatarSrcUrl.src);
			setAvatar(null);
		}

		if (cover) {
			const coverSrcUrl = await uploadAvatar(cover);
			coverSrcUrl && (data.cover = coverSrcUrl.src);
			setCover(null);
		}
		
		dispatch(updateUser(data));
	};

	React.useEffect(() => {
		if (isUserUpdated) {
			model.current.style.display = 'none';
			const modalBackdrop = document.querySelector('.modal-backdrop');
			modalBackdrop && modalBackdrop.remove();
		}
	}, [isUserUpdated]);

	return (
		<div
			className='modal fade'
			id='exampleModal'
			ref={model}
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Edit profile
						</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<EditProfileCover handleAvatar={handleAvatarAndCover} user={user} />

						{updateProfileJson &&
							updateProfileJson.map((item: any, index: number) => {
								return (
									<div className='mb-3 mt-4' key={index}>
										<label htmlFor={item.name} className='form-label'>
											{item.placeholder}
										</label>
										{item.type == 'textarea' ? (
											<textarea
												className='form-control'
												id={item.name}
												rows={5}
												value={inputFormData[item.name]}
												onChange={(e) => {
													setInputFormData({
														...inputFormData,
														[item.name]: e.target.value,
													});
												}}
											></textarea>
										) : (
											<input
												type={item.type}
												className='form-control bg-white'
												id={item.name}
												value={inputFormData[item.name]}
												onChange={(e) => {
													setInputFormData({
														...inputFormData,
														[item.name]: e.target.value,
													});
												}}
											/>
										)}
									</div>
								);
							})}

						<div className='mb-3'>
							<label htmlFor='' className='form-label mb-3'>
								Date of birth
							</label>
							<Calendar handleDate_Of_birth={handleDate_Of_birth} />
						</div>
					</div>

					<div className='modal-footer'>
						<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
							Close
						</button>
						<button type='button' className='btn btn-dark editProfile' onClick={handleSubmit}>
							{loading ? <Spinner size='sm' /> : 'Save changes'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileModel;
