import { ITweet } from '../tweet.type'

export interface TweetsState {
	loading: boolean
	error: string | null
	tweets: ITweet[]
	tweet: ITweet | null
}

export interface TweetsAction {
	type: string
	payload?: any
}

export const initialState: TweetsState = {
	loading: false,
	error: null,
	tweets: [],
	tweet: null,
}

export enum TweetsActionTypes {
	GET_TWEETS_START = 'GET_TWEETS_START',
	GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS',
	GET_TWEETS_FAILURE = 'GET_TWEETS_FAILURE',
	ADD_TWEET = 'ADD_TWEET',
	UPDATE_TWEET = 'UPDATE_TWEET',
	RETWEET = 'RETWEET',
	GET_TWEET = 'GET_TWEET',
	DELTE_TWEET = 'DELTE_TWEET',
}
