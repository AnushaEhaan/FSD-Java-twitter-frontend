import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
		<div>
			<header>
				<h1 className='text-3xl font-bold text-center text-gray-900'>Create your account</h1>
			</header>
			<section className='mt-7'>
				<form>
					<div className='mb-3'>
						<label htmlFor='Email' className='form-label'>
							Name
						</label>
						<input type='email' className='form-control' id='Email' />
					</div>
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
					<div className='mb-3'>
						<label htmlFor='Password' className='form-label'>
							Confirm Password
						</label>
						<input type='email' className='form-control' id='Password' />
					</div>
					<div>
						<button className='btn btn-dark mt-4 w-100 btn-block'>Sign Up</button>
					</div>
				</form>
			</section>
			<footer className='mt-5'>
				<p className='text-center text-gray-600'>
					Already have an account?{" "}
					<Link to='/'>
						<span className='fw-bold fs-17'>Sign In</span>
					</Link>
				</p>
			</footer>
		</div>
	);
}

export default SignUp