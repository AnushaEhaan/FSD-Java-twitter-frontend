import { NotificationState } from '../../types/store/notification.types'
import { SignUpState } from '../../types/store/signUp.store.types'
import { CommentsState } from '../../types/store/comments.types'
import { ProfileUserState } from '../../types/store/profileInfo.types'
import { SuggestedUsersState } from '../../types/store/suggestedUsers.store.types'
import { TrendsState } from '../../types/store//trends.types'
import { TweetsState } from '../../types/store/tweets.types'
import { UpdateUserState } from '../../types/store/updateUser.types'
import { UserState } from '../../types/store/user.store.types'
import { UserPeopleState } from '../../types/store/userPeople.store.types'

export interface IRootState {
	signUp: SignUpState
	user: UserState
	updateUser: UpdateUserState
	profileUser: ProfileUserState
	tweets: TweetsState
	comments: CommentsState
	trends: TrendsState
	suggestedUsers: SuggestedUsersState
	userPeople: UserPeopleState
	notifications: NotificationState
}
