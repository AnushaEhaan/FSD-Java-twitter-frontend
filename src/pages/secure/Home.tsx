import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/common/Nav';
import SideBar from "../../components/common/SideBar";

const Home = () => {
  return (
		<div>
			<section className='container'>
				<div className='row gx-md-3'>
					<aside className='col-xl-2 col-lg-1 col-12 px-lg-auto px-0 mx-0'>
						<div className='w-100 position-relative'>
							<div className='position-fixed w-lg-auto w-100 left-lg-0 px-lg-auto px-4 bg-white'>
								<Nav />
							</div>
						</div>
					</aside>

					<main className='col-xl-6 col-lg-7 col-md-7 col-12'>
						<div className='bg-dark'>
							<Outlet />
						</div>
					</main>

					<aside className='col-xl-4 col-lg-4 col-md-5 col-12'>
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