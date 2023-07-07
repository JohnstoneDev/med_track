import {
	useContext
} from 'react'

import { ApplicationContext } from '../App'

export const Account = ( { user, loggedIn }) => {
	const { dispatch } = useContext(ApplicationContext)

	const logOut = () => {
		fetch('/logout',
		{
			method : 'DELETE'
		})
		.then(() => {
			dispatch({
				type :'LOGOUT'
			})
		})
	}

	return (
		<div className='p-4'>
			<div className='flex justify-evenly items-center font-headings'>
				<h1 className='border-b-4 border-b-blue-500'>
					Hello there, <span className='text-amber-500 font-extrabold font-text'>{user.username} </span>!</h1>
				<button
					hidden={!loggedIn}
					className="form-input w-[100px] rounded-md p-2 bg-blue-500 font-semibold hover:bg-amber-500 hover:transition-all duration-700"
					onClick={logOut}>
							Log Out
				</button>
			</div>
		</div>
	)
}