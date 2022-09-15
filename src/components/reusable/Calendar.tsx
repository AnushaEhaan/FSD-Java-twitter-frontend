import React from 'react'

interface IProps {
	handleDate_Of_birth: (date: object) => void
}

const Calendar = ({ handleDate_Of_birth }: IProps) => {
	const [selectedMonth, setSelectedMonth] = React.useState(null)
	const [selectedDay, setSelectedDay] = React.useState(null)
	const [selectedYear, setSelectedYear] = React.useState(null)

	const getMonth = (value: any) => {
		setSelectedMonth(value)
	}

	const getDay = (value: any) => {
		setSelectedDay(value)
	}

	const getYear = (value: any) => {
		setSelectedYear(value)
	}

	React.useEffect(() => {
		handleDate_Of_birth({
			month: selectedMonth,
			day: selectedDay,
			year: selectedYear,
		})
	}, [selectedMonth, selectedDay, selectedYear])

	return (
		<div className='d-flex justify-content-between'>
			<MonthDropdown getMonth={getMonth} />
			<div className='mx-4 w-100'>
				<Days getDay={getDay} />
			</div>
			<Years getYear={getYear} />
		</div>
	)
}

const MonthDropdown = ({ getMonth }: any) => {
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
	]

	const [selectedMonth, setSelectedMonth] = React.useState(null)

	const handleMonthClick = (value: any) => {
		setSelectedMonth(value)
		getMonth(value)
	}

	return (
		<div className='dropdown w-100'>
			<button
				className='btn btn-outline-secondary text-dark w-100 dropdown-toggle'
				type='button'
				id='months'
				data-bs-toggle='dropdown'
				aria-expanded='false'>
				{selectedMonth || 'Month'}
			</button>
			<ul
				className='dropdown-menu overflow-y-auto'
				aria-labelledby='months'
				style={{
					maxHeight: '200px',
				}}>
				{months.map((month, index) => {
					return (
						<li
							key={index}
							className='dropdown-item'
							onClick={() => handleMonthClick(month)}>
							{month}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

const Days = ({ getDay }: any) => {
	const daysInMonth = (month: any, year: any) => {
		return new Date(year, month, 0).getDate()
	}
	const howManyDaysInMonth = daysInMonth(
		new Date().getMonth(),
		new Date().getFullYear()
	)
	const days = Array.from(Array(howManyDaysInMonth).keys())

	const [selectedDay, setSelectedDay] = React.useState(null)

	const handleDayClick = (day: any) => {
		setSelectedDay(day)
		getDay(day)
	}

	return (
		<div className='dropdown w-100'>
			<button
				className='btn btn-outline-secondary text-dark w-100 dropdown-toggle'
				type='button'
				id='Day'
				data-bs-toggle='dropdown'
				aria-expanded='false'>
				{selectedDay || 'Day'}
			</button>
			<ul
				className='dropdown-menu overflow-y-auto'
				aria-labelledby='Day'
				style={{
					maxHeight: '200px',
				}}>
				{days.map((day, index) => {
					return (
						<li
							key={index}
							className='dropdown-item'
							onClick={() => handleDayClick(day + 1)}>
							{day + 1}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

const Years = ({ getYear }: any) => {
	const years = Array.from(Array(new Date().getFullYear() - 1969).keys())
	const [year, setYear] = React.useState(null)

	const handleChange = (value: any) => {
		setYear(value)
		getYear(value)
	}

	return (
		<div className='dropdown w-100'>
			<button
				className='btn btn-outline-secondary text-dark w-100 dropdown-toggle'
				type='button'
				id='Day'
				data-bs-toggle='dropdown'
				aria-expanded='false'>
				{year || 'Year'}
			</button>
			<ul
				className='dropdown-menu overflow-y-auto'
				aria-labelledby='Day'
				style={{
					maxHeight: '200px',
				}}>
				{years.map((year, index) => {
					const yearNew = new Date().getFullYear() - year
					return (
						<li
							key={index}
							className='dropdown-item'
							onClick={() => handleChange(yearNew)}>
							{yearNew}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Calendar
