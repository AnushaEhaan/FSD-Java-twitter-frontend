import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { followUser } from '../../store/actions/profileInfo.action'

interface Iprops {
	user: any
}

const BtnUserFollowUnfollow = ({ user }: Iprops) => {
	const dispatch = useDispatch()
	const handleFollowUser = (id: string) => {
		dispatch(followUser(id))
	}
	const currentUserId = Cookies.get('user_Id')
	return (
		<button
			className={`btn ${
				user.followers.includes(currentUserId)
					? 'btn-outline-secondary text-dark border-dark'
					: 'btn-dark'
			} btn-sm`}
			onClick={() => handleFollowUser(user._id)}>
			{user.followers.includes(currentUserId) ? 'Unfollow' : 'Follow'}
		</button>
	)
}

export default BtnUserFollowUnfollow
