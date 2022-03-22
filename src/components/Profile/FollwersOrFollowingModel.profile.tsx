import React, {memo} from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../common/Spinner';
import SuggestedUserSidebar from '../sidebar/suggestedUsers/UsersGroup';
import { getUserFollwersOrFollowing } from '../../store/actions/userFollwersOrFollowing.action';

interface Iprops {
	show: boolean;
	handleClose: () => void;
	user: any;
	type: string;
	nextPage: () => void;
	totalPages: number;
  page: number;
}

const FollwersOrFollowingModel = ({
	handleClose,
	show,
	totalPages,
  page,
	type,
	nextPage,
}: Iprops) => {
	const dispatch = useDispatch();
	const { userFollwersOrFollowing, loading, error } = useSelector(
		(state: any) => state.userFollwersOrFollowing,
	);
	return (
		<div>
			<Modal show={show} onHide={handleClose} dialogClassName='mw-sm modal-dialog-scrollable'>
				<Modal.Header closeButton>
					<Modal.Title className='text-capitalize'>{type}</Modal.Title>
				</Modal.Header>
				<Modal.Body className='py-2'>
					{loading ? (
						<Spinner height='15vh' />
					) : userFollwersOrFollowing.length === 0 ? <p className='text-center my-4'>
							{error ? error : `No ${type} yet`}
					</p> : (
						<SuggestedUserSidebar users={userFollwersOrFollowing} />
					)}
					{totalPages > 1 && totalPages !== page && (
						<div className='center my-3' onClick={nextPage}>
							<button className='btn py-7px fs-13 btn-dark'>Load More </button>
						</div>
					)}
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default memo(FollwersOrFollowingModel);