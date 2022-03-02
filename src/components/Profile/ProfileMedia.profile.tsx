import React from 'react'
import {getOnlyMediaTweets} from "../../store/actions/tweets.action"
import { useDispatch, useSelector } from 'react-redux';
import TweetGroup from '../../components/tweet/TweetGroup';
import { useParams } from 'react-router';

const ProfileMedia = () => {
  const params = useParams();
	const { id }: any = params;
	const dispatch = useDispatch();
	const { tweets, loading: tweetLoading } = useSelector((state: any) => state.tweets);
	React.useEffect(() => {
		dispatch(getOnlyMediaTweets(id));
	}, []);

  return (
		<div>
			  <TweetGroup tweets={tweets} loading={tweetLoading} />
		</div>
	);
}

export default ProfileMedia