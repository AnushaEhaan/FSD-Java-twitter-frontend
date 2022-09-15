import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopTrends } from '../../store/actions/trends.action'
import Spinner from '../reusable/Spinner'
import TrendItem from './TrendItem'

const TrendsList = () => {
	const dispatch = useDispatch()
	const { topTrends } = useSelector((state: any) => state.trends)
	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const data = await dispatch(getTopTrends())
			setLoading(false)
		}
		fetchData()
	}, [dispatch])

	return (
		<div className='bg-secondary bg-opacity-25 rounded py-4	 px-lg-3 px-2'>
			<div className='ms-2'>
				<h5 className='fs-19'>Trends for you</h5>
			</div>

			<main className='mt-3'>
				{loading && (
					<div className='mt-5'>
						<Spinner size='sm' />
					</div>
				)}

				{topTrends.length > 0 &&
					topTrends.map((trend: any) => (
						<TrendItem
							trend={trend}
							key={trend._id}
						/>
					))}

				{topTrends.length === 0 && !loading && (
					<div className='mt-6 text-center'>
						<p>No trends found</p>
					</div>
				)}
			</main>
		</div>
	)
}

export default TrendsList
