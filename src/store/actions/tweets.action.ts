import {
	TweetsActionTypes,
	TweetsAction,
} from '../../interfaces/store/tweets.types';
import axios from '../../common/axios';
import { toast } from 'react-toastify';


const getTweetsStart = (): TweetsAction => ({
    type: TweetsActionTypes.GET_TWEETS_START,
});

const getTweetsSuccess = (tweets: any): TweetsAction => ({
    type: TweetsActionTypes.GET_TWEETS_SUCCESS,
    payload: tweets,
});

const getTweetsFailure = (error: any): TweetsAction => ({
    type: TweetsActionTypes.GET_TWEETS_FAILURE,
    payload: error,
});


export const getTweets = (userId:string) => async (dispatch: any) => {
    dispatch(getTweetsStart());
    try {
        const response = await axios.get(`/tweet/getTweets/${userId}`);
        const data = await response.data;
        dispatch(getTweetsSuccess(data.tweets));
    } catch (error:any) {
        dispatch(getTweetsFailure(error?.response.data.message));
        toast.error(error?.response.data.message);
    }
}