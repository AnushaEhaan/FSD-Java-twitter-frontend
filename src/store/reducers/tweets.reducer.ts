import {
	initialState,
	TweetsAction,
	TweetsActionTypes,
	TweetsState,
} from '../../interfaces/store/tweets.types';

const tweetsReducer = (
	state: TweetsState = initialState,
	action: TweetsAction,
): TweetsState => {
	switch (action.type) {
		case TweetsActionTypes.GET_TWEETS_START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case TweetsActionTypes.GET_TWEETS_SUCCESS:
			return {
				...state,
				loading: false,
				tweets: action.payload,
			};
		case TweetsActionTypes.GET_TWEETS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case TweetsActionTypes.UPDATE_TWEETS:
			return {
				...state,
				tweets: [action.payload, ...state.tweets],
			};
		case TweetsActionTypes.LIKE_TWEET:
			return {
				...state,
				tweets: state.tweets.map((tweet: any) =>
					tweet._id === action.payload._id ? { ...tweet, likes: action.payload.likes } : tweet,
				),
			};

		case TweetsActionTypes.RETWEET:
			const path = window.location.pathname;
			if (path.startsWith('/profile')) {
				if (
					!action.payload.isRetweeted &&
					action.payload.currentUserID !== action.payload.tweet.user._id
				) {
					return {
						...state,
						tweets: state.tweets.filter(
							(tweet: any) => tweet._id !== action.payload.tweet._id,
						),
					};
				}
				return {
					...state,
					tweets: state.tweets.map((tweet: any) =>
						tweet._id === action.payload.tweet._id ? action.payload.tweet : tweet,
					),
				};
			} else {
				return {
					...state,
					tweets: state.tweets.map((tweet: any) =>
						tweet._id === action.payload.tweet._id ? action.payload.tweet : tweet,
					),
				};
			}
		default:
			return state;
	}
};

export default tweetsReducer;
