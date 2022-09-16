import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../components/reusable/Spinner'
import signupJson from '../../jsons/signup.json'
import { signUp } from '../../store/actions/signUp.action'
import { IRootState } from '../../types/store/IRootState.types'

const SingUp = () => {
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { isSignUp, loading } = useSelector(
		(state: IRootState) => state.signUp
	)

	const initialFormState: any = {}
	signupJson.forEach((form) => {
		initialFormState[`${form.name}`] = ''
	})

	const [form, setForm] = React.useState<any>(initialFormState)
	const handleSubmit = (e: any) => {
		e.preventDefault()

		const isValid = Object.values(form).every((value) => value !== '')
		if (!isValid) {
			toast.error('Please fill all the fields')
			return
		} else if (form.password !== form.confirmPassword) {
			toast.error('Passwords do not match')
			return
		}

		const { name, email, password } = form
		dispatch(signUp({ name, email, password }))
	}

	React.useEffect(() => {
		if (isSignUp) {
			navigate('/')
		}
	}, [isSignUp])

	return (
		<div>
			<header>
				<h1 className='text-3xl font-bold text-center text-gray-900'>
					Create your account
				</h1>
			</header>

			<section className='mt-6'>
				<form onSubmit={handleSubmit}>
					{signupJson.map((field, index) => {
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
							{loading ? <Spinner size='sm' /> : 'Sign Up'}
						</button>
					</div>
				</form>
			</section>

			<footer className='mt-5'>
				<p className='text-center text-gray-600'>
					Already have an account?{' '}
					<Link to='/'>
						<span className='fw-bold fs-17'>Sign In</span>
					</Link>
				</p>
			</footer>
		</div>
	)
}

export default SingUp
