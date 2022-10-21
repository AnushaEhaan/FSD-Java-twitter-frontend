import { NotificationState } from './notification.type'
import { SignUpState } from './signUp.store.type'
import { CommentsState } from './comments.type'
import { ProfileUserState } from './profileInfo.type'
import { SuggestedUsersState } from './suggestedUsers.store.type'
import { TrendsState } from './trends.type'
import { TweetsState } from './tweets.type'
import { UpdateUserState } from './updateUser.type'
import { UserState } from './user.store.type'
import { UserPeopleState } from './userPeople.store.type'

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
