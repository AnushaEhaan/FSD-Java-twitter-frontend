import React, { useState } from 'react'
import TweetContent  from "../../components/tweet/Tweet"
import Comment from '../../components/tweet/Comment.tweet';
import { useDispatch, useSelector } from 'react-redux';
import { findTweetById } from '../../store/actions/tweets.action';
import { useParams } from 'react-router-dom';
import TweetModelForm from '../../components/tweet/TweetModelForm';
import Spinner from '../../components/common/Spinner';

const Tweet = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const {tweet} = useSelector((state:any) => state.tweets)

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const isTweetFound = id && (await dispatch(findTweetById(id)));
            console.log(isTweetFound);
            !isTweetFound &&  setError('Tweet not found')
            setLoading(false)
        }
        fetchData();
    }, [id])

    console.log(tweet)


  if (loading) return <Spinner size='sm' height="10vw" />;
  if (error) return <div className='center mt-5 fs-17 alert alert-danger w-md mx-auto'>{error} ☹️</div>;

  return (
		<div className='px-md-4'>
			{tweet && <TweetContent tweet={tweet} />}
			<footer className='mt-3'>
					<TweetModelForm />
				<div className='d-flex justify-content-end  pb-4 mb-5 mt-4 border-bottom'>
					<div>
						<button className='btn ms-4 btn-dark'>Comment</button>
					</div>
				</div>
				<h4>Comments {tweet?.comments.length} </h4>
				{tweet?.comments.length > 0 &&
					tweet.comments.map((comment: any) => {
						return <Comment comment={comment} />;
					})}
			</footer>
		</div>
	);
}

export default Tweet