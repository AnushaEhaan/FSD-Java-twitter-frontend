import React from 'react';

const Calendar = () => {
	return (
		<div className='d-flex justify-content-between'>
			<MonthDropdown />
			<div className='mx-4 w-100'>
				<Days />
			</div>
			<Years />
		</div>
	);
};

const MonthDropdown = () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const [selectedMonth, setSelectedMonth] = React.useState(null);

	const handleMonthClick = (value: any) => {
		setSelectedMonth(value);
	};

	return (
		<div className='dropdown w-100'>
			<button
				className='btn btn-secondary w-100 dropdown-toggle'
				type='button'
				id='months'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				{selectedMonth || 'Month'}
			</button>
			<ul className='dropdown-menu' aria-labelledby='months'>
				{months.map((month, index) => {
					return (
						<li key={index} className='dropdown-item' onClick={() => handleMonthClick(month)}>
							{month}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const Days = () => {
	const daysInMonth = (month: any, year: any) => {
		return new Date(year, month, 0).getDate();
	};
	const howManyDaysInMonth = daysInMonth(new Date().getMonth(), new Date().getFullYear());
	const days = Array.from(Array(howManyDaysInMonth).keys());

	const [selectedDay, setSelectedDay] = React.useState(null);

	const handleDayClick = (day: any) => {
		setSelectedDay(day);
	};

	return (
		<div className='dropdown w-100'>
			<button
				className='btn btn-secondary w-100 dropdown-toggle'
				type='button'
				id='Day'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				{selectedDay || 'Day'}
			</button>
			<ul className='dropdown-menu' aria-labelledby='Day'>
				{days.map((day, index) => {
					return (
						<li key={index} className='dropdown-item' onClick={() => handleDayClick(day + 1)}>
							{day + 1}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const Years = () => {
	const years = Array.from(Array(new Date().getFullYear() - 1969).keys());
	const [year, setYear] = React.useState(null);

	const handleChange = (value: any) => {
		setYear(value);
	};

	return (
		<div className='dropdown w-100'>
			<button
				className='btn btn-secondary w-100 dropdown-toggle'
				type='button'
				id='Day'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				{year || 'Year'}
			</button>
			<ul className='dropdown-menu' aria-labelledby='Day'>
				{years.map((year, index) => {
					const yearNew = new Date().getFullYear() - year;
					return (
						<li key={index} className='dropdown-item' onClick={() => handleChange(yearNew)}>
							{yearNew}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Calendar;
