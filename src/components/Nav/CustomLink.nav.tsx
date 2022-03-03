import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

interface Iprops {
	link: any;
	iconSize : string;
}

const CustomLink = ({ link, iconSize }: Iprops) => {
	const userId = Cookies.get('user_Id');
	const [isLinkActive, setIsLinkActive] = useState(false);
	const to = link.url == '/profile' ? link.url + '/' + userId : link.url;

	return (
		<div>
			<NavLink
				to={to}
				className={({ isActive }) => {
					setIsLinkActive(isActive);
					let className = 'nav-link ';
					className += link.hideOnMd
						? ' text-xl-start text-lg-center '
						: ' text-xl-start text-center ';
					return isActive
						? className + 'border-dark border-lg-0 border-2 border-bottom active  py-2'
						: className;
				}}
			>
				<i
					className={`${isLinkActive ? `${link.active_icon}` : `${link.icon}`} ${iconSize}`}
				></i>
				<span
					className={`fs-17 ms-4 d-xl-inline ${
						link.hideOnMd ? 'd-lg-none' : 'd-none'
					} ${isLinkActive && 'fw-bolder'}  `}
				>
					{link.title}
				</span>
			</NavLink>
		</div>
	);
};

export default CustomLink;
