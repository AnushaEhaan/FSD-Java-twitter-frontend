import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../components/reusable/Spinner'
import useForm from '../../hooks/useForm'
import signupJson from '../../jsons/signup.json'
import { signUp } from '../../store/actions/signUp.action'
import { IForm } from '../../types/form.types'
import { IRootState } from '../../types/store/IRootState.types'

const SingUp = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isSignUp, loading } = useSelector(
		(state: IRootState) => state.signUp
	)

	const { form, handleChange, doValidate, setFormError } = useForm(signupJson)

	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (!doValidate()) return
		if (form.password.value !== form.confirmPassword.value)
			return setFormError('confirmPassword', 'Passwords do not match')

		dispatch(
			signUp({
				name: form.name.value,
				email: form.email.value,
				password: form.password.value,
			})
		)
	}

	React.useEffect(() => {
		isSignUp && navigate('/')
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
					{signupJson.map((field: IForm, index: number) => {
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
									placeholder={field.placeholder}
									name={field.name}
									value={form[field.name].value}
									onChange={handleChange}
								/>
								<div className='mt-2 fs-14 text-danger'>
									{form[field.name].error}
								</div>
							</div>
						)
					})}
					<div>
						<button
							className='btn btn-dark mt-4 w-100 btn-block'
							disabled={loading}
							type='submit'>
							{loading ? <Spinner size='sm' /> : 'Sign Up'}
						</button>
					</div>
				</form>
			</section>

			<footer className='mt-5'>
				<div className='text-center text-gray-600'>
					Already have an account?{' '}
					<Link to='/'>
						<span className='fw-bold fs-17'>Sign In</span>
					</Link>
				</div>
			</footer>
		</div>
	)
}

export default SingUp
