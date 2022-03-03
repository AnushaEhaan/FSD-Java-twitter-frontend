import React, { useState } from 'react';
import navData from '../../JSON/navigation.json';
import LogOutBtn from '../Nav/LogOutBtn.nav';
import DropDownMenu from '../Nav/DropDownMenu.nav';
import CustomLink from '..//Nav/CustomLink.nav';

const Nav = () => {
	return (
		<section className='w-100 vh-lg-100 py-lg-0 py-3 px-lg-0 px-4'>
			<main className='d-flex flex-lg-column justify-content-between h-100'>
				<ul className='nav py-lg-5 flex-lg-column'>
					{navData.length >= 1 &&
						navData.map((item, index) => {
							return (
								<li
									key={index}
									className={`nav-item py-1 mb-lg-2 hover-bg-secondary rounded-pill ${
										item.hideOnMd
											? 'd-lg-inline d-none'
											: 'w-lg-auto h-lg-auto w-47px me-lg-0 me-3 h-47px d-lg-inline d-flex justify-content-center align-items-center '
									} `}
								>
									{<CustomLink iconSize='fs-20' link={item} />}
								</li>
							);
						})}
				</ul>
				<LogOutBtn />
				<div className='dropdown d-lg-none d-inline'>
					<DropDownMenu />
				</div>
			</main>
		</section>
	);
};

export default Nav;
