import React from 'react';
import { userLogout } from '../../store/actions/user.action';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
 
interface Iprops {
	displayInDropDown?: boolean;
}

const LogOutBtn = ({ displayInDropDown }: Iprops) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const handleLogOut = () => {
		dispatch(userLogout());
		navigate('/');
	}

	return (
		<div>
			<button
				className={` btn bg-secondary mb-lg-4 w-100 ${
					displayInDropDown ? 'w-100 py-2 rounded-0 rounded-bottom mt-1' : 'd-lg-flex d-none py-3'
				} justify-content-center align-items-center me-xl-2 btn-lg   me-1`}
				onClick={handleLogOut}
			>
				<i className='fa-solid fa-arrow-right-from-bracket mt-1 me-xl-3  fs-18'></i>
				<span className='mt-1 fs-17 d-xl-inline d-none'>Log Out</span>
			</button>
		</div>
	);
};

export default LogOutBtn;
