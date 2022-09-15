import SuggestionsList from './suggestedUsers/SuggestionsList'
import Trends from './trends/Trends.sidebar'

const SideBar = () => {
	return (
		<div className='ps-lg-7 ps-4 mt-lg-5 mt-9 mb-7'>
			<Trends />
			<SuggestionsList />
		</div>
	)
}

export default SideBar
