import React from 'react'
import Trends from "./trends/Trends.sidebar"
import SuggestedUsersSidebar from './suggestedUsers/SuggestedUsers.sidebar';

const SideBar = () => {
  return (
		<div className='ps-lg-7 ps-4 mt-lg-5 mt-9 mb-7'>
			<Trends />
			<SuggestedUsersSidebar />
		</div>
	);
}

export default SideBar