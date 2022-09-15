import React, { useState } from 'react'
import TweetContent  from "../../components/tweet/Tweet"
import TweetCommentGroup from '../../components/tweet/TweetCommentGroup.tweet';
import { useDispatch, useSelector } from 'react-redux';
import { findTweetById } from '../../store/actions/tweets.action';
import { useParams } from 'react-router-dom';
import TweetModelForm from '../../components/tweet/TweetModelForm';
import Spinner from '../../components/reusable/Spinner';
import Cookies from 'js-cookie';
import { addComment } from '../../store/actions/comment.action';

const Tweet = () => {
    const userId = Cookies.get('user_Id');
    const {id} = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [addCommentLoading, setAddCommentLoading] = useState(false);
    const [error, setError] = useState('')
    const {tweet} = useSelector((state:any) => state.tweets)
    const [content, setContent] = useState('');

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

    const handleChange = (e:any) => {
        setContent(e.target.value);
    }

    const handleAddComment = async () => {
			setAddCommentLoading(true);
			const data = {
				content,
				tweetId: tweet._id,
				userId
			};
			const isAdded = await dispatch(addComment(data));
			console.log(isAdded);
			setContent('');
			setAddCommentLoading(false);
		};

  if (loading) return <Spinner size='sm' height="10vw" />;
  if (error) return <div className='center mt-5 fs-17 alert alert-danger w-md mx-auto'>{error} ☹️</div>;

  return (
		<div className='px-md-4 pt-lg-5 pt-md-3'>
			{tweet && <TweetContent tweet={tweet} hideCommentBtn={true} />}
			<footer className='mt-3'>
				<TweetModelForm handleChange={handleChange} content={content} />
				<div className='d-flex justify-content-end  pb-4 mb-5 mt-4 border-bottom'>
					<div>
						<button
							className='btn ms-4 btn-dark'
							onClick={handleAddComment}
							disabled={addCommentLoading}
						>
							Comment
						</button>
					</div>
				</div>
				<TweetCommentGroup />
			</footer>
		</div>
	);
}

export default Tweet