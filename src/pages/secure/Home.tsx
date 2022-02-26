import React from 'react'
import {Outlet } from 'react-router-dom';
import SideBar from "../../components/common/SideBar"
import Nav from '../../components/common/Nav';

const Home = () => {
  return (
		<div>
			<section className='container'>
				<div className='row gx-md-6'>
					<aside className='col-lg-3 col-12'>
						<div className='display-none shadow bg-success'>
							<Nav />
						</div>
					</aside>

					<main className='col-lg-5 col-md-7 col-12'>
						<div className='bg-dark'>
							<Outlet />
						</div>
					</main>

					<aside className='col-lg-4 col-md-5 col-12'>
						<div className='d-md-flex d-none shadow bg-success'>
							<SideBar />
						</div>
					</aside>
				</div>
			</section>
		</div>
	);
}

export default Home