import { TweetsActionTypes, TweetsAction } from '../../interfaces/store/tweets.types';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

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

const getTweet = (tweet: any): TweetsAction => ({
	type: TweetsActionTypes.GET_TWEET,
	payload : tweet
});

export const addTweet = (tweet: any): TweetsAction => ({
	type: TweetsActionTypes.ADD_TWEET,
	payload: tweet,
});

export const updateTweet = (tweet: any): TweetsAction => ({
	type: TweetsActionTypes.UPDATE_TWEET,
	payload: tweet,
});

const setRetweet = (obj: any): TweetsAction => ({
	type: TweetsActionTypes.RETWEET,
	payload: obj,
});

export const getTweets = (userId: string) => async (dispatch: any) => {
	dispatch(getTweetsStart());
	try {
		const response = await axios.get(`/tweet/getTweets/${userId}`);
		const data = await response.data;
		dispatch(getTweetsSuccess(data.tweets));
	} catch (error: any) {
		dispatch(getTweetsFailure(error?.response.data.message));
		toast.error(error?.response.data.message);
	}
};

export const getUserTweets = (userId: string) => async (dispatch: any) => {
	dispatch(getTweetsStart());
	try {
		const response = await axios.get(`/tweet/getUserTweets/${userId}`);
		const data = await response.data;
		dispatch(getTweetsSuccess(data.tweets));
	} catch (error: any) {
		dispatch(getTweetsFailure(error?.response.data.message));
		toast.error(error?.response.data.message);
	}
};

export const getOnlyMediaTweets = (userId: string) => async (dispatch: any) => {
	dispatch(getTweetsStart());
	try {
		const response = await axios.get(`/tweet/getUserMediaTweets/${userId}`);
		const data = await response.data;
		dispatch(getTweetsSuccess(data.tweets));
	} catch (error: any) {
		dispatch(getTweetsFailure(error?.response.data.message));
		toast.error(error?.response.data.message);
	}
};

export const getTweetsLikeByUser = (userId: string) => async (dispatch: any) => {
	dispatch(getTweetsStart());
	try {
		const response = await axios.get(`/tweet/getTweetsLikeByUser/${userId}`);
		const data = await response.data;
		dispatch(getTweetsSuccess(data.tweets));
	} catch (error: any) {
		dispatch(getTweetsFailure(error?.response.data.message));
		toast.error(error?.response.data.message);
	}
};

export const likeTweet = (tweetId: string) => async (dispatch: any) => {
	try {
		const userId = Cookies.get('user_Id');
		const response = await axios.post(`/tweet/likeTweet/${tweetId}/${userId}`);
		const data = await response.data;
		dispatch(
			updateTweet(data.tweet),
		);
	} catch (error: any) {
		toast.error(error?.response.data.message);
	}
};

export const retweet = (tweetId: string) => async (dispatch: any) => {
	try {
		const userId = Cookies.get('user_Id');
		const response = await axios.post(`/tweet/retweet/${tweetId}/${userId}`);
		const data = await response.data;
		dispatch(
			setRetweet({
				tweet: data.tweet,
				isRetweeted: data.isRetweeted,
				currentUserID: userId,
			}),
		);
	} catch (error: any) {
		toast.error(error?.response.data.message);
	}
};


export const findTweetById = (tweetId: string) => async (dispatch: any) => {
	try {
		const response = await axios.get(`/tweet/getTweetById/${tweetId}`);
		const data = await response.data;
		dispatch(getTweet(data.tweet));
		return true;
	} catch (error: any) {
		return false
	}
}