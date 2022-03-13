import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSuggestedUsers } from '../../../store/actions/suggestedUsers.action';
import Spinner from '../../common/Spinner';
import SuggestedUserSidebar from "./SuggestedUser.sidebar"

const SuggestedUsersSidebar = () => {
  const dispatch = useDispatch()
  const { suggestedUsers, loading, error } = useSelector((state: any) => state.suggestedUsers);

  React.useEffect(()=>{
    dispatch(getSuggestedUsers(5,1))
  },[])

  return (
		<div className='bg-secondary bg-opacity-25 rounded pt-25px pb-3	 px-2 mt-5'>
			<header className='ms-3 mb-2'>
				<h5 className='fs-19'>Suggestions for you</h5>
			</header>
			<main>
				{loading ? (
					<Spinner size='sm' height='8vh' />
				) : suggestedUsers.length > 0 ? (
					suggestedUsers.map((user: any) => {
						return <SuggestedUserSidebar user={user} key={user._id} />;
					})
				) : (
					<div className='mt-6 text-center'>
						<p>{error ? error : 'No suggestions found'}</p>
					</div>
				)}
			</main>
		</div>
	);
}

export default SuggestedUsersSidebar