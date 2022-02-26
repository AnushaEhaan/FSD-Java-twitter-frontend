import React from 'react';
import Calendar from '../common/Calendar';
const EditProfileModel = () => {
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
						<div className='mb-3'>
							<label htmlFor='name' className='form-label'>
								Name
							</label>
							<input type='email' className='form-control bg-white' id='name' />
						</div>
						<div className='mb-4'>
							<label htmlFor='exampleFormControlTextarea1' className='form-label'>
								Bio
							</label>
							<textarea className='form-control' id='exampleFormControlTextarea1'></textarea>
						</div>

                        <div className='mb-3'>
                            <label htmlFor='' className='form-label mb-3'>
                                Date of birth
                            </label>
                            <Calendar/>
                        </div>

					</div>
					<div className='modal-footer'>
						<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
							Close
						</button>
						<button type='button' className='btn btn-primary'>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileModel;
