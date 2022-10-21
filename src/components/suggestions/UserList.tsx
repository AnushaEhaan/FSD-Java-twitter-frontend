import { IUser } from '../../types/user.type'
import UserListItem from './UserListItem'

interface Iprops {
	users: IUser[]
}

const UserList = ({ users }: Iprops) => {
	return (
		<div>
			{users.length > 0 &&
				users.map((user: IUser) => {
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
