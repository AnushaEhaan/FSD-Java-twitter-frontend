import React from 'react'
import { LinkProps, useResolvedPath, useMatch, Link } from 'react-router-dom';

interface Iprops {
	to: string;
	children: any;
	active_icon: string;
	icon: string;
	hideOnMd: boolean;
}


const CustomLink = ({ children, to, active_icon, icon, hideOnMd }: Iprops) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });
	return (
		<div>
			<Link
				to={to}
				className={`nav-link ${match ? 'active' : ''} ${
					hideOnMd ? 'text-xl-start text-lg-center' : ' text-xl-start text-center'
				} `}
			>
				<i className={`${match ? `${active_icon}` : `${icon}`} fs-21`}></i>
				<span className={`fs-18 ms-4 d-xl-inline ${hideOnMd ? 'd-lg-none' : 'd-none'}  `}>
					{children}
				</span>
			</Link>
		</div>
	);
};

export default CustomLink;