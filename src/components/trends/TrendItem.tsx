import { Link } from 'react-router-dom'

interface Iprops {
	trend: any
}

const TrendItem = ({ trend }: Iprops) => {
	return (
		<Link
			to={`/trends/${trend.name}`}
			className='d-flex  justify-content-between hover-bg-secondary py-3 px-2 rounded'>
			<h6
				className='mb-0'
				style={{ fontSize: '14.5px' }}>
				{trend.name}
			</h6>
			<small className='text-black-50 fs-14'>
				{trend.count} Tweet{trend.count > 1 && 's'}
			</small>
		</Link>
	)
}

export default TrendItem
