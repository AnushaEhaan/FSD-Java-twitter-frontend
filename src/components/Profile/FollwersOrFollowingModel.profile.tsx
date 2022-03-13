import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../common/Spinner';
import SuggestedUserSidebar from '../sidebar/suggestedUsers/UsersGroup';

interface Iprops {
  show: boolean;
  handleClose: () => void;
  user: any;
  type: string;
}

const FollwersOrFollowingModel = ({ handleClose, show, user, type }: Iprops) => {
	const dispatch = useDispatch();
	const { userFollwersOrFollowing, loading, error } = useSelector(
		(state: any) => state.userFollwersOrFollowing,
	);
	return (
		<div>
			<Modal show={show} onHide={handleClose} dialogClassName='mw-sm'>
				<Modal.Header closeButton>
					<Modal.Title className='text-capitalize'>{type}</Modal.Title>
				</Modal.Header>
				<Modal.Body className='py-2'>
					{loading ? (
						<Spinner height='15vh' />
					) : (
						<SuggestedUserSidebar users={userFollwersOrFollowing} />
					)}
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default FollwersOrFollowingModel