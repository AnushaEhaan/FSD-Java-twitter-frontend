import { ITweet } from './tweet.type'

export interface IUser {
	_id: string
	name: string
	email: string
	password: string
	avatar: string
	location: string
	website: string
	cover: string
	bio: string
	date_Of_birth: Date
	date_Created: Date
	following: Array<string>
	followers: Array<string>
	total_Notifications: number
	total_Messages: number
	is_Verified: boolean
	tweets: Array<ITweet>
	bookmarks: Array<ITweet>
}
