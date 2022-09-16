import React from 'react'
import { useDispatch } from 'react-redux'
import { countUnreadNotifications } from '../../store/actions/notification.action'
import NavigationDropdown from '../navigation/NavigationDropdown'
import NavigationsList from '../navigation/NavigationsList'
import BtnLogOut from '../reusable/BtnLogOut'

const Navbar = () => {
	const dispatch = useDispatch()
	const getNotificationsAction = () => dispatch(countUnreadNotifications())

	React.useEffect(() => {
		const interval = setInterval(() => {
			getNotificationsAction()
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className='w-100 vh-lg-100 py-lg-0 py-3 px-lg-0 px-4'>
			<main className='d-flex flex-lg-column justify-content-between h-100'>
				<NavigationsList />
				<BtnLogOut />
				<div className='dropdown d-lg-none d-inline'>
					<NavigationDropdown />
				</div>
			</main>
		</section>
	)
}

export default Navbar
