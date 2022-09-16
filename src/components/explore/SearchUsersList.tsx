import Spinner from '../reusable/Spinner'
import SearchUserItem from './SearchUserItem'

interface Iprops {
	users: any[]
	error: any
	loading: boolean
}

const SearchUsersList = ({ users, error, loading }: Iprops) => {
	return (
		<div
			className='position-absolute  bg-white p-2 py-3 w-100 shadow border rounded-3 mt-1'
			style={{
				maxHeight: '400px',
				minHeight: '150px',
				overflowY: 'auto',
			}}>
			{loading && users.length === 0 && (
				<Spinner
					size='sm'
					height='10vh'
				/>
			)}
			{users.length > 0 &&
				users.map((user: any) => {
					return (
						<SearchUserItem
							key={user._id}
							user={user}
						/>
					)
				})}
			{error && (
				<p className='text-black-50 mt-6 h-100 text-center mb-0 py-3'>
					{error}
				</p>
			)}
		</div>
	)
}

export default SearchUsersList
