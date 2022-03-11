import React from 'react'

const SearchTrends = () => {
  return (
		<div>
			<form>
				<div className='input-group mb-3 px-4'>
					<input
						type='text'
						className='form-control'
						placeholder='Search tweets by hashtag'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
					/>
					<span
						className='input-group-text border border-dark bg-dark text-white'
						id='basic-addon2'
					>
						<i className='fa-solid fa-magnifying-glass'></i>
					</span>
				</div>
			</form>
		</div>
	);
}

export default SearchTrends