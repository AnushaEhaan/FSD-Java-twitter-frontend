import React from 'react'

interface Iprops {
	size?: string;
	height?: string;
}

const Spinner = ({ size, height:h }: Iprops) => {
	return (
		<div
			style={{
				height: h || '',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div className={` ${size ? `spinner-border-${size}` : 'spinner-border'} `} role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Spinner