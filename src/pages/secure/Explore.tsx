import SearchUserForm from '../../components/explore/SearchUserForm'
import TweetExploreList from '../../components/explore/TweetExploreList'

const Explore = () => {
	return (
		<div className='py-md-5 px-md-2 pt-1'>
			<SearchUserForm />
			<TweetExploreList />
		</div>
	)
}

export default Explore
