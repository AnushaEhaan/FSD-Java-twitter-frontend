import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TweetGroup from '../../components/tweet/TweetGroup';
import SearchTrends from '../../components/trends/Search.trends';
import { findTrends } from '../../store/actions/trends.action';
import { toast } from 'react-toastify';

const Trends = () => {
	const { slug } = useParams();
	const  navigate  = useNavigate();
	const dispatch = useDispatch();
	const { tweets, loading } = useSelector((state: any) => state.tweets);

	const [search, setSearch] = React.useState(slug)

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (search) {
			dispatch(findTrends(search));
			navigate(`/trends/${search}`);
		} else {
			toast.error('Please enter a search term');
		}
	};

	React.useEffect(() => {
		setSearch(slug);
		slug && dispatch(findTrends(slug));
	}, [slug]);

	return (
		<div className='mx-md-4 mt-4'>
			<header>
				<SearchTrends
					search={search}
					handleSearch={handleSearch}
					handleSubmit={handleSubmit}
				/>
			</header>
			<div className='mt-3'>
				<TweetGroup tweets={tweets} loading={loading} error='No tweets found for this trend' />
			</div>
		</div>
	);
};

export default Trends;
