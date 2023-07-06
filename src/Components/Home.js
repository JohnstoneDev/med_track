import {
	useContext,
	useEffect,
	useState
 } from "react"

import { 
	Link,
	useNavigate
 } from "react-router-dom";

import { ApplicationContext } from "../App"

export const Home = () => {
	const { user, loggedIn } = useContext(ApplicationContext).state;
	const { dispatch } = useContext(ApplicationContext)
	const [ loading, setLoading ] = useState(true)

	const navigate = useNavigate()

	const logOut = () => {
		console.log("LOg Out Clicked!")
		fetch('/logout',
		{
			method : 'DELETE'
		})
		.then(() => {
			dispatch({
				type :'LOGOUT'
			})
			navigate("/login")
		})
	}

	console.log(user)

	setTimeout(() => {
		setLoading(false)
	},2000);

	return (
		<div className="text-center space-y-4">

			{
				loading ?
				<div> Loading ... </div> :
				<div>
					<button hidden={!loggedIn} onClick={() => logOut()}>
						Logout
					</button>
					{
						loggedIn ? 
						<h1>Hello {user.username}</h1> : 
						<h1>You need to 
							<Link to="/login">log in </Link> or <Link to="/signup">Sign Up</Link>
						</h1>
	
					}
				</div>
			}
		</div>
	)
}