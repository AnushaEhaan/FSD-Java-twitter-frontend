import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { followUser } from '../../store/actions/profileInfo.action'
import { IUser } from '../../types/user.type'

interface Iprops {
	user: IUser
}

const BtnUserFollowUnfollow = ({ user }: Iprops) => {
	const currentUserId = Cookies.get('user_Id')
	const dispatch = useDispatch()

	const handleFollowUser = () => dispatch(followUser(user._id))

	const isCurrentUserInFollowers = () =>
		user.followers.includes(currentUserId as string)

	return (
		<button
			className={`btn ${
				isCurrentUserInFollowers()
					? 'btn-outline-secondary text-dark border-dark'
					: 'btn-dark'
			} btn-sm`}
			onClick={handleFollowUser}>
			{isCurrentUserInFollowers() ? 'Unfollow' : 'Follow'}
		</button>
	)
}

export default BtnUserFollowUnfollow
