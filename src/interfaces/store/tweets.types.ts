export interface TweetsState {
	loading: boolean;
	error: string | null;
    tweets: any;
}

export interface TweetsAction {
	type: string;
	payload?: any;
}

export const initialState: TweetsState = {
	loading: false,
	error: null,
	tweets: [],
};

export enum TweetsActionTypes {
	GET_TWEETS_START = 'GET_TWEETS_START',
    GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS',
    GET_TWEETS_FAILURE = 'GET_TWEETS_FAILURE',
	UPDATE_TWEETS = 'UPDATE_TWEETS',
}
