import React from 'react';
import navData from "../../JSON/navigation.json";
import CustomLink from "../Nav/CustomLink";
import LogOutBtn from '../Nav/LogOutBtn';

const Nav = () => {
  return (
		<section className='w-100 vh-lg-100 py-lg-0 py-4 border-end-lg pe-xl-0 pe-1'>
			<main
				className='d-flex  flex-lg-column justify-content-between h-100'
			>
				<ul className='nav py-lg-5 flex-lg-column'>
					{navData.map((item, index) => {
						return (
							<li
								key={index}
								className={`nav-item py-1 mb-2 hover-bg-secondary rounded-pill ${
									item.hideOnMd ? 'd-lg-inline d-none' : "w-lg-auto h-lg-auto w-47px me-lg-0 me-3 h-47px d-lg-inline d-flex justify-content-center align-items-center "
								} `}
							>
								<CustomLink
									to={item.url}
									active_icon={item.active_icon}
									icon={item.icon}
									hideOnMd={item.hideOnMd}
								>
									{item.title}
								</CustomLink>
							</li>
						);
					})}
				</ul>
				<LogOutBtn />

				<div className='dropdown d-lg-none d-inline'>
					<button
						className='btn btn-secondary rounded-circle h-45px w-45px center'
						type='button'
						id='dropdownMenuButton1'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<i className='fa-solid fa-user mt-1 me-xl-3  fs-18'></i>
					</button>
					<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
						{navData
							.filter((item) => item.hideOnMd)
							.map((item, index) => {
								return (
									<li key={index} className='dropdown-item'>
										<CustomLink
											to={item.url}
											active_icon={item.active_icon}
											icon={item.icon}
											hideOnMd={item.hideOnMd}
										>
											{item.title}
										</CustomLink>
									</li>
								);
							})}
						<LogOutBtn displayInDropDown={true} />
					</ul>
				</div>
			</main>
		</section>
	);
}

export default Nav