import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

interface Iprops {
	link: any;
}

const CustomLink = ({ link }: Iprops) => {
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
					return isActive ? className + ' active ' : className;
				}}
			>
				<i className={`${isLinkActive ? `${link.active_icon}` : `${link.icon}`} fs-20`}></i>
				<span className={`fs-17 ms-4 d-xl-inline ${link.hideOnMd ? 'd-lg-none' : 'd-none'}  `}>
					{link.title}
				</span>
			</NavLink>
		</div>
	);
};

export default CustomLink;
