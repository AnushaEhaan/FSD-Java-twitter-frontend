import React from 'react';
import { Link } from 'react-router-dom';
import profileNavJson from '../../JSON/profileNav.json';


const Nav = () => {
	return (
		<div>
			<ul className='nav mt-5 border-bottom justify-content-between'>
				{profileNavJson.map((item, index) => {
					return (
						<li className='nav-item'>
							<Link className='nav-link active py-3 text-dark text-opacity-50' aria-current='page' to={item.url}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Nav;
