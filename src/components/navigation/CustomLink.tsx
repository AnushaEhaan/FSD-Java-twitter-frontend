import Cookies from 'js-cookie'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

interface Iprops {
	link: any
	iconSize: string
}

const CustomLink = ({ link, iconSize }: Iprops) => {
	const userId = Cookies.get('user_Id')
	const [isLinkActive, setIsLinkActive] = useState(false)
	const to = link.url == '/profile' ? link.url + '/' + userId : link.url
	const { totalUnreadNotifications } = useSelector(
		(state: any) => state.notifications
	)

	return (
		<div>
			<NavLink
				to={to}
				className={({ isActive }) => {
					setIsLinkActive(isActive)
					let className = 'nav-link '
					className += link.hideOnMd
						? ' text-xl-start text-lg-center '
						: ' text-xl-start text-center '
					return isActive
						? className +
								'border-dark border-lg-0 border-3 border-bottom active  py-2'
						: className
				}}>
				<div className='d-inline position-relative '>
					<i
						className={`${
							isLinkActive ||
							(link.url == '/notifications' &&
								totalUnreadNotifications > 0)
								? `${link.active_icon}`
								: `${link.icon}`
						} ${iconSize}`}></i>
					{link.url == '/notifications' &&
						totalUnreadNotifications > 0 && (
							<span
								className='position-absolute fw-medium'
								style={{ top: '-11px' }}>
								{totalUnreadNotifications}
							</span>
						)}
				</div>
				<span
					className={`fs-17 ms-4 d-xl-inline ${
						link.hideOnMd ? 'd-lg-none' : 'd-none'
					} ${isLinkActive && 'fw-bolder'}  `}>
					{link.title}
				</span>
			</NavLink>
		</div>
	)
}

export default CustomLink
