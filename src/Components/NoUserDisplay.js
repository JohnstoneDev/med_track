import { Link } from "react-router-dom"


export const NoUser = () => {
	return (
		<div>
				<p>
						You are seeing this view because you are not logged in !
				</p>

				<h1>You need to <Link to="/login">Log In </Link> or <Link to="/signup">Sign Up</Link> </h1>

		</div>
	)
}