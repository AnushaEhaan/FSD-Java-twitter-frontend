import { Link } from 'react-router-dom'
import stringUtils from '../../utils/string.utils'

interface Iprops {
	tweet: any
}

const TweetDetails = ({ tweet }: Iprops) => {
	return (
		<Link to={`/tweet/${tweet._id}`}>
			<main className='px-1 my-3 w-100'>
				<p>{stringUtils.heighLightTrends(tweet.content)}</p>
				{tweet.photo && (
					<img
						src={tweet.photo}
						className='w-100 rounded mt-1 h-md2'
						alt=''
					/>
				)}
			</main>
		</Link>
	)
}

export default TweetDetails
