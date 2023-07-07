import {
	useContext,
	useState
 } from "react"

import { ApplicationContext } from "../App"
import { NoUser } from "./NoUserDisplay";
import { Account } from "./Account";

export const Home = () => {
	const { user, loggedIn } = useContext(ApplicationContext).state;
	const [ loading, setLoading ] = useState(true)

	setTimeout(() => {
		setLoading(false)
	},1000);

	return (
		<div className="text-center space-y-4">

			{
				loading ?
				<div> Loading ... </div> :
				<div>
					{
						loggedIn ?
						<Account user={user} loggedIn={loggedIn}/>:
						<NoUser />
					}
				</div>
			}
		</div>
	)
}