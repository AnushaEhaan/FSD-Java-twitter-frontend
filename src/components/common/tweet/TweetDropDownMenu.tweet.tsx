import React from 'react'

const TweetDropDownMenu = () => {
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
					<li>
						<a className='dropdown-item' href='#'>
							Action
						</a>
					</li>
					<li>
						<a className='dropdown-item' href='#'>
							Another action
						</a>
					</li>
					<li>
						<a className='dropdown-item' href='#'>
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TweetDropDownMenu