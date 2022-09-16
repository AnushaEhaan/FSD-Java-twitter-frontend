import SuggestionsList from '../suggestions/SuggestionsList'
import Trends from '../trends/TrendsList'

const SideBar = () => {
	return (
		<div className='ps-lg-7 ps-4 mt-lg-5 mt-9 mb-7'>
			<Trends />
			<SuggestionsList />
		</div>
	)
}

export default SideBar
