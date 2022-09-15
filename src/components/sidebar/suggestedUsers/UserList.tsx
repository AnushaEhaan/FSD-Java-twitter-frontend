import UserListItem from './UserListItem'

interface Iprops {
	users: any
}

const UserList = ({ users }: Iprops) => {
	return (
		<div>
			{users.length > 0 &&
				users.map((user: any) => {
					return (
						<UserListItem
							user={user}
							key={user._id}
						/>
					)
				})}
		</div>
	)
}

export default UserList
