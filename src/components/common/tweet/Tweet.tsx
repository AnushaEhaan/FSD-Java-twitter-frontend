import React from 'react'
import TweetDropDownMenu from "./TweetDropDownMenu.tweet"

const Tweet = () => {
  return (
		<section>
			<header className='d-flex justify-content-between align-items-center'>
				<div>
					<img
						src='https://pbs.twimg.com/profile_images/1151890543162646528/RG-t6m7R_400x400.jpg'
						alt=''
						className='rounded-circle w-40px h-40px me-3'
					/>
					<span className='fw-bold fs-16'>Safdar Azeem</span>
					<span className='fs-12 bg-secondary bg-opacity-75 ms-3 fw-medium px-5px py-5px rounded fs-14px'>
						1 Day Ago
					</span>
				</div>
				<TweetDropDownMenu />
			</header>

			<main className='px-1 mt-4'>
				<p>
					Putin’s nuclear threats are wild and reckless. US and NATO must resist calls to react
					in kind and inject nuclear weapons deeper into this conflict. Imperative to keep
					lines open between Washington and Moscow in order to mitigate miscalculation.
					Escalation cannot be controlled.
				</p>
				<img
					src='https://images.unsplash.com/photo-1643101808513-0552e31e4d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
					className='w-100 rounded mt-2 h-md2'
					alt=''
				/>
			</main>

			<footer className='mb-9 mt-3 px-3 d-flex  justify-content-between '>
				<button className='btn btn-outline-secondary border-0 w-40px h-40px center'>
					<i className='fa-regular fa-comment fs-20 text-dark'></i>
				</button>
				<button className='btn btn-outline-secondary border-0 w-40px h-40px center'>
					<i className='fa-solid fa-retweet fs-20 text-dark'></i>
				</button>
				<button className='btn btn-outline-secondary border-0 w-40px h-40px center'>
					<i className='fa-regular fa-heart fs-20 text-dark'></i>
				</button>
				<button className='btn btn-outline-secondary border-0 w-40px h-40px center'>
					<i className='fa-solid fa-arrow-up-from-bracket fs-20 text-dark'></i>
				</button>
			</footer>
		</section>
	);
}

export default Tweet