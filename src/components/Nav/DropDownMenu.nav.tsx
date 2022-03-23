import React from 'react';
import { useSelector } from 'react-redux';
import navData from '../../JSON/navigation.json';
import Avatar from '../common/Avatar';
import CustomLink from './CustomLink.nav';
import LogOutBtn from './LogOutBtn.nav';

const DropDownMenu = () => {
	const { currentUser } = useSelector((state: any) => state.user);
	
	return (
		<div>
			<button
				className='btn pt-3 h-42px w-42px center'
				type='button'
				id='dropdownMenuButton1'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				<Avatar avatar={currentUser.avatar} />
			</button>
			<ul className='dropdown-menu pb-0 top-10px' aria-labelledby='dropdownMenuButton1'>
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
