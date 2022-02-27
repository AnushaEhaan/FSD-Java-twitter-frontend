import React from 'react';
import Calendar from '../common/Calendar';
import EditProfileCover from './EditProfileCover.profile';
import { toast } from 'react-toastify';

const EditProfileModel = () => {
	const [avatar, setAvatar] = React.useState('');
	const [name, setName] = React.useState('');
	const [bio, setBio] = React.useState('');
	const [date_Of_birth, setDate_Of_birth] = React.useState<any>({
		month: null,
		day: null,
		year: null,
	});

	const handleDate_Of_birth = (date: object) => {
		setDate_Of_birth(date);
	};

	const handleAvatar = (avatar: string) => {
		setAvatar(avatar);
	};

	const handleSubmit = () => {
		const date_Of_birth_is_empty = Object.values(date_Of_birth).some(
			(value) => value !== null,
		);
		const all_fields_are_empty = Object.values(date_Of_birth).every((value) => value !== null);

		if (date_Of_birth_is_empty) {
			if (!all_fields_are_empty) {
				toast.error('Please fill all fields of date of birth');
				return;
			}
		}
	};

	return (
		<div
			className='modal fade'
			id='exampleModal'
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
						<EditProfileCover handleAvatar={handleAvatar} />
						<div className='mb-3 mt-4'>
							<label htmlFor='name' className='form-label'>
								Name
							</label>
							<input
								type='email'
								className='form-control bg-white'
								id='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label htmlFor='exampleFormControlTextarea1' className='form-label'>
								Bio
							</label>
							<textarea
								className='form-control'
								id='exampleFormControlTextarea1'
								value={bio}
								onChange={(e) => setBio(e.target.value)}
							></textarea>
						</div>

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
						<button type='button' className='btn btn-dark' onClick={handleSubmit}>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileModel;
