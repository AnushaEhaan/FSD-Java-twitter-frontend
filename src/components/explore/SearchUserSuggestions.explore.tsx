import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';
import Spinner from '../common/Spinner';

interface Iprops {
	users: any[];
	error: any;
	loading: boolean;
}

const SearchUserSuggestionsExplore = ({ users, error, loading }: Iprops) => {
	const UserItem = ({ user }: any) => {
		return (
			<Link
				to={`/profile/${user._id}`}
				className={`d-flex ${
					!user.bio && 'align-items-center'
				} cursor hover-bg-secondary p-3 rounded-2`}
			>
				<Avatar avatar={user.avatar} />
				<div>
					<p className='mb-0 fw-medium'>{user.name}</p>
					<small className='mt-2px fs-13'>{user.bio}</small>
				</div>
			</Link>
		);
	};
	return (
		<div className='position-absolute  bg-white p-2 py-3 w-100 shadow border rounded-3 mt-1'
		style={{
			maxHeight: '400px',
			minHeight: '150px',
			overflowY: 'auto',
		}}
		>
			{loading && <Spinner size='sm' height='10vh' />}
			{users.length > 0 &&
				users.map((user: any) => {
					return <UserItem key={user._id} user={user} />;
				})}
			{error && <p className='text-black-50 mt-6 h-100 text-center mb-0 py-3'>{error}</p>}
		</div>
	);
};

export default SearchUserSuggestionsExplore;
