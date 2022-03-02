import React from 'react'
import {useSelector} from 'react-redux'
import Avatar from "../common/Avatar"
const TweetModelForm = () => {
    const {currentUser} = useSelector((state: any) => state.user)
  return (
		<div className='d-flex align-items-start mt-3'>
			<Avatar avatar={currentUser.avatar} />
			<textarea className='form-control mt-1 fs-17 border-0 ps-0' placeholder='Tweet your reply'></textarea>
		</div>
	);
}

export default TweetModelForm