import { initialState, TweetsAction, TweetsActionTypes, TweetsState } from '../../types/store/tweets.type'
import { ITweet } from '../../types/tweet.type'

const tweetsReducer = (state: TweetsState = initialState, action: TweetsAction): TweetsState => {
   switch (action.type) {
      case TweetsActionTypes.GET_TWEETS_START:
         return {
            ...state,
            loading: true,
            error: null,
         }
      case TweetsActionTypes.GET_TWEETS_SUCCESS:
         return {
            ...state,
            loading: false,
            tweets: action.payload,
         }
      case TweetsActionTypes.GET_TWEETS_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }
      case TweetsActionTypes.GET_TWEET:
         return {
            ...state,
            tweet: action.payload,
         }

      case TweetsActionTypes.ADD_TWEET:
         return {
            ...state,
            tweets: [action.payload, ...state.tweets],
         }
      case TweetsActionTypes.UPDATE_TWEET:
         return {
            ...state,
            tweets: state.tweets.map((tweet: any) =>
               tweet._id === action.payload._id ? action.payload : tweet
            ),
            tweet: {
               ...action.payload,
               comments: state.tweet?.comments,
            },
         }
      case TweetsActionTypes.LIKE_TWEET:
         console.log(action.payload)
         return {
            ...state,
            tweets: state.tweets.map(
               (tweet: ITweet): ITweet =>
                  tweet._id === action.payload.tweetId
                     ? {
                          ...tweet,
                          likes: tweet.likes.includes(action.payload.meId)
                             ? tweet.likes.filter((id: string) => id !== action.payload.meId)
                             : [...tweet.likes, action.payload.meId],
                       }
                     : tweet
            ),
            // @ts-ignore
            tweet: {
               ...state.tweet,
               likes: state.tweet
                  ? state.tweet?.likes.includes(action.payload.meId)
                     ? state.tweet?.likes.filter((id: string) => id !== action.payload.meId)
                     : [...state.tweet?.likes, action.payload.meId]
                  : [],
            },
         }

      case TweetsActionTypes.RETWEET:
         const path = window.location.pathname
         if (path.startsWith('/profile')) {
            if (
               !action.payload.isRetweeted &&
               action.payload.currentUserID !== action.payload.tweet.user._id
            ) {
               return {
                  ...state,
                  tweets: state.tweets.filter((tweet: any) => tweet._id !== action.payload.tweet._id),
               }
            }
            return {
               ...state,
               tweets: state.tweets.map((tweet: any) =>
                  tweet._id === action.payload.tweet._id ? action.payload.tweet : tweet
               ),
               tweet: {
                  ...action.payload.tweet,
                  comments: state.tweet?.comments,
               },
            }
         } else {
            return {
               ...state,
               tweets: state.tweets.map((tweet: any) =>
                  tweet._id === action.payload.tweet._id ? action.payload.tweet : tweet
               ),
               tweet: {
                  ...action.payload.tweet,
                  comments: state.tweet?.comments,
               },
            }
         }
      case TweetsActionTypes.DELTE_TWEET:
         return {
            ...state,
            tweets: state.tweets.filter((tweet: any) => tweet._id !== action.payload),
         }
      default:
         return state
   }
}

export default tweetsReducer
