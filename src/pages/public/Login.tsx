import React from 'react';
import { Link } from 'react-router-dom';
import formJson from '../../JSON/loginForm.json';


const Login = () => {
	const initialFormState:any = {}
	formJson.forEach(form => {
		initialFormState[`${form.name}`] = '';
	});

	const [form, setForm] = React.useState<any>(initialFormState);

	const handleSubmit = (e:any) => {
		e.preventDefault();
		console.log(form);
	}

	return (
		<div>
			<header>
				<h1 className='text-3xl font-bold text-center text-gray-900'>Sign in to Twitter</h1>
			</header>
      
			<section className='mt-7'>
				<form onSubmit={handleSubmit}>
					{
						formJson.map((field, index) => {
							return (
								<div key={index} className='mb-3'>
									<label htmlFor={field.name} className='form-label'>
										{field.placeholder}
									</label>
									<input 
											type={field.type} className='form-control' 
											id={field.name}
											name={field.name}
											value={form[field.name]}
											onChange={(e) => {
												setForm({
													...form,
													[field.name]: e.target.value
												})
											}}
									/>
								</div>
							);
						})
					}
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
		</div>
	);
};

export default Login;
