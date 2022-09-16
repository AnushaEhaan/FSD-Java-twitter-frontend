import { Link } from 'react-router-dom'
import stringUtils from '../../utils/string.utils'

interface Iprops {
	tweet: any
}

const TweetExplore = ({ tweet }: Iprops) => {
	return (
		<div className='mb-5'>
			<Link
				to={`/tweet/${tweet._id}`}
				className='cursor'>
				{tweet.content && (
					<p
						className={`fs-14 ${
							!tweet.photo
								? 'bg-secondary bg-opacity-50 p-4 rounded-2'
								: 'mb-10px ps-5px'
						} `}>
						{stringUtils.heighLightTrends(tweet.content)}
					</p>
				)}
				{tweet.photo && (
					<img
						src={tweet.photo}
						className='w-100 h-sm rounded-2'
						alt=''
					/>
				)}
			</Link>
		</div>
	)
}

export default TweetExplore
