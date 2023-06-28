import { ITweet } from '../tweet.type'

export interface TweetsState {
   loading: boolean
   tweets: ITweet[]
   error: string | null
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
   RETWEET = 'RETWEET',
   ADD_TWEET = 'ADD_TWEET',
   GET_TWEET = 'GET_TWEET',
   LIKE_TWEET = 'LIKE_TWEET',
   DELTE_TWEET = 'DELTE_TWEET',
   UPDATE_TWEET = 'UPDATE_TWEET',
   GET_TWEETS_START = 'GET_TWEETS_START',
   GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS',
   GET_TWEETS_FAILURE = 'GET_TWEETS_FAILURE',
}
