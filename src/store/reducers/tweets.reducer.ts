import {
    TweetsState,
    TweetsActionTypes,
    TweetsAction,
    initialState,
} from "../../interfaces/store/tweets.types"

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

        default:
            return state;
    }
}

export default tweetsReducer;