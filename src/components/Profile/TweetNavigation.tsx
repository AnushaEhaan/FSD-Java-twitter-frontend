import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import profileNavJson from '../../JSON/profileNav.json'

interface Iprops {
	id: string
}

const TweetNavigation = ({ id }: Iprops) => {
	return (
		<ul className='nav mt-3 border-bottom justify-content-between'>
			{profileNavJson.map((item, index) => {
				const url = item.url.replace(':id', id)
				return (
					<li
						className='nav-item'
						key={index}>
						<CustomLink
							url={url}
							title={item.title}
						/>
					</li>
				)
			})}
		</ul>
	)
}

const CustomLink = ({ url, title }: any) => {
	let resolved = useResolvedPath(url)
	let match = useMatch({ path: resolved.pathname, end: true })
	return (
		<Link
			to={url}
			className={`nav-link active py-3 text-dark text-opacity-50 ${
				match ? 'border-dark border-3 border-bottom' : ''
			}  `}>
			{title}
		</Link>
	)
}

export default TweetNavigation
