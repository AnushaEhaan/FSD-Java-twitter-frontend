import React from 'react';
import navData from '../../JSON/navigation.json';
import CustomLink from './CustomLink.nav';
import LogOutBtn from './LogOutBtn.nav';

const DropDownMenu = () => {
	return (
		<div>
			<button
				className='btn btn-secondary rounded-circle h-42px w-42px center'
				type='button'
				id='dropdownMenuButton1'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				<i className='fa-solid fa-user mt-1 me-xl-3  fs-16 text-dark text-opacity-75'></i>
			</button>
			<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
				{navData
					.filter((item) => item.hideOnMd)
					.map((item, index) => {
						return (
							<li key={index} className='dropdown-item fs-18 py-2px'>
								<CustomLink iconSize='fs-18' link={item} />
							</li>
						);
					})}
				<LogOutBtn displayInDropDown={true} />
			</ul>
		</div>
	);
};

export default DropDownMenu;
