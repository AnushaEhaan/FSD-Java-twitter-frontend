import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<header>
				<h1 className='text-3xl font-bold text-center text-gray-900'>Sign in to Twitter</h1>

				<section className='mt-7'>
					<form>
						<div className='mb-3'>
							<label htmlFor='Email' className='form-label'>
								Email address
							</label>
							<input type='email' className='form-control' id='Email' />
						</div>
						<div className='mb-3'>
							<label htmlFor='Password' className='form-label'>
								Password
							</label>
							<input type='email' className='form-control' id='Password' />
						</div>
						<div>
							<button className='btn btn-dark mt-4 w-100 btn-block'>Sign in</button>
						</div>
					</form>
				</section>

				<footer className='mt-5'>
					<p className='text-center text-gray-600'>
						Don't have an account?{' '}
						<Link to='/signup'>
							<span className='fw-bold fs-17'>Sign up</span>
						</Link>
					</p>
				</footer>
			</header>
		</div>
	);
};

export default Login;
