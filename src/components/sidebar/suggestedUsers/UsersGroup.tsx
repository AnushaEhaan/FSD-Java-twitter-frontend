import React from 'react';
import SuggestedUserSidebar from './SuggestedUser.sidebar';

interface Iprops {
	users: any;
}

const UsersGroup = ({ users }: Iprops) => {
	return (
		<div>
			{users.length > 0 &&
				users.map((user: any) => {
					return <SuggestedUserSidebar user={user} key={user._id} />;
				})}
		</div>
	);
};

export default UsersGroup;
