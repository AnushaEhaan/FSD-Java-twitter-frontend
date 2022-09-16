import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../components/reusable/Spinner'
import loginJson from '../../jsons/login.json'
import { userLogin } from '../../store/actions/user.action'
import { IRootState } from '../../types/store/IRootState.types'

const Login = () => {
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { currentUser, loading, error } = useSelector(
		(state: IRootState) => state.user
	)

	const initialFormState: any = {}
	loginJson.forEach((form) => {
		initialFormState[`${form.name}`] = form.value
	})

	const [form, setForm] = React.useState<any>(initialFormState)
	const handleSubmit = (e: any) => {
		e.preventDefault()
		dispatch(userLogin(form))
	}

	React.useEffect(() => {
		if (currentUser) {
			navigate('/')
		} else if (error) {
			console.log(error)
		}
	}, [currentUser, error])

	return (
		<div>
			<header>
				<h1 className='text-3xl font-bold text-center text-gray-900'>
					Sign in to Twitter
				</h1>
			</header>

			<section className='mt-6'>
				<form onSubmit={handleSubmit}>
					{loginJson.map((field, index) => {
						return (
							<div
								key={index}
								className='mb-3'>
								<label
									htmlFor={field.name}
									className='form-label'>
									{field.placeholder}
								</label>
								<input
									type={field.type}
									className='form-control'
									id={field.name}
									name={field.name}
									value={form[field.name]}
									onChange={(e) => {
										setForm({
											...form,
											[field.name]: e.target.value,
										})
									}}
								/>
							</div>
						)
					})}
					<div>
						<button
							className='btn btn-dark mt-4 w-100 btn-block'
							disabled={loading}>
							{loading ? <Spinner size='sm' /> : 'Login'}
						</button>
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
	)
}

export default Login
