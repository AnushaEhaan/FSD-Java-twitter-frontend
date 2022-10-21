import React from 'react'
import { IUser } from '../../types/user.type'

interface Iprops {
	handleAvatar: (avatar: any) => void
	user: IUser
}

const EditProfileCover = ({ handleAvatar, user }: Iprops) => {
	const [selectedAvatar, setSelectedAvatar] = React.useState<any>(null)
	const [cover, setCover] = React.useState<any>(null)

	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return
		const file = e.target.files[0]
		handleAvatar({
			state: 'avatar',
			file,
		})
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			setSelectedAvatar(reader.result)
		}
	}

	const handleCoverChanlge = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return
		const file = e.target.files[0]
		handleAvatar({
			state: 'cover',
			file,
		})
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			setCover(reader.result)
		}
	}

	return (
		<div className='position-relative'>
			<div className='position-relative'>
				<img
					src={cover || user.cover}
					className='w-100 h-sm rounded'
					alt=''
				/>
				<div className='bg-dark center rounded  position-absolute w-100 top-0 h-100 bg-opacity-25'>
					<label
						className='btn bg-secondary bg-opacity-10 w-40px h-40px center'
						style={{ zIndex: '0' }}>
						<i className='fa-solid fa-image  fs-20'></i>
						<input
							type='file'
							className='d-none'
							onChange={handleCoverChanlge}
						/>
					</label>
				</div>
			</div>

			<div
				className='position-relative'
				style={{ marginTop: '-50px', zIndex: '2' }}>
				<div className='position-relative rounded-circle h-122px w-122px '>
					<img
						src={selectedAvatar || user.avatar}
						className='rounded-circle border-white w-100 h-100  border-4 bg-white'
						alt=''
					/>
					<div className='bg-dark center rounded-circle position-absolute w-100 top-0 h-100 bg-opacity-10'>
						<label
							className='btn bg-secondary bg-opacity-10 w-40px h-40px center'
							style={{ zIndex: '0' }}>
							<i className='fa-solid fa-image  fs-20'></i>
							<input
								type='file'
								className='d-none'
								onChange={handleAvatarChange}
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditProfileCover
