import Cookies from 'js-cookie';
import React from 'react'
import { Link } from 'react-router-dom';
import { deleteTweet } from '../../store/actions/tweets.action';
import { useDispatch, useSelector } from "react-redux"
import Spinner from '../common/Spinner';

interface Iprops {
	userId: string;
	userName: string;
	tweetId: string;
}

const TweetDropDownMenu = ({ userId, userName, tweetId }: Iprops) => {
	const currentUserId = Cookies.get('user_Id');
	const dispatch = useDispatch();

	const handleDelete = async (tweetId: string) => {
		await dispatch(deleteTweet(tweetId));
	};
	
	return (
		<div>
			<div className='dropdown'>
				<button
					className='btn btn-outline-secondary border-0 text-dark text-opacity-75  h-33px w-33px center'
					type='button'
					id='dropdownMenuButton1'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i className='fa-solid fa-ellipsis-vertical fs-17'></i>
				</button>
				<ul className='dropdown-menu dropdown-menu-end' aria-labelledby='dropdownMenuButton1'>
					{currentUserId === userId && (
						<li className='dropdown-item py-2 cursor' onClick={() => handleDelete(tweetId)}>
							<i className='fa-solid fa-trash me-3 fs-16'></i>
							Delete
						</li>
					)}
					<Link className='dropdown-item py-2 cursor' to={`/profile/${userId}`}>
						<i className='fa-solid fa-user me-3 fs-18'></i>
						{userName.split(' ')[0]}
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default TweetDropDownMenu