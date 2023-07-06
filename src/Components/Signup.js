import {
	useContext,
	useState
} from "react";

import {
	 Link,
	 useNavigate
} from "react-router-dom";

import { ApplicationContext } from "../App";

export const SignUp = () => {
	const { dispatch } = useContext(ApplicationContext);

	const navigate = useNavigate()

	const [ formData, setFormData ] = useState({
		username : '',
		email : "",
		password : ''
	});

	const [ errors, setErrors ] = useState([]);
	const [ hideErrors, setHideErrors ] = useState(true);

	const [ message, setMessage ] = useState("");
	const [ hideMessage, setHideMessage ] = useState(true)

	const changeEvent = (e) => {
		e.preventDefault()
		setFormData({...formData, [e.target.name] : e.target.value})
	}

	const submitForm = (e) => {
		e.preventDefault();

		if (formData.username && formData.email && formData.password !== ""){
					fetch('/users',{
						method : 'POST',
						headers : {
							'Content-Type' : 'application/json'
						},
						body : JSON.stringify(formData)
					})
					.then(r => {
						if (r.ok) {
							r.json().then((user) => {
								dispatch({
									type : 'SIGNUP',
									payload : user
								});
								navigate('/')

								throw r;
							})
						}
						else {
							r.json().then(d => {

								setHideErrors(false)
								setErrors(d.errors)

								setTimeout(() => {
									setHideErrors(true)
									setErrors([])
								},5000)

							})
						}
					})

		}
		else {
			setHideMessage(false);
			setMessage("Make sure all form inputs are properly filled");

			setTimeout(() => {
				setHideMessage(true);
				setMessage("")
			},3000)
		}
	}

	return (
		<div className="flex flex-col p-24 justify-around w-screen h-full items-center">
			<h1 className="text-4xl p-2 border-b-4 border-b-blue-500 font-semibold">Dosage Tracker</h1>
			<form className="grid gap-2 w-[850px] justify-around rounded items-center m-2 p-12" onSubmit={submitForm}>
					<label className="block p-2">
						<p className="text-blue-500 w-fit font-extrabold">
							Sign Up
						</p>
					</label>
					<label className="block p-2 text-xl">
							<p className="text-xl my-2">
								Username
							</p>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={changeEvent}
							className="form-input rounded-md block w-[500px] text-black"
							placeholder="Choose a unique username"
							/>
					</label>

					<label className="block p-2 text-xl">
						<p className="text-xl my-2">
							Email Address
						</p>
						<input
							type="text"
							name="email"
							value={formData.email}
							onChange={changeEvent}
							className="form-input rounded-md block w-full text-black"
							placeholder="Enter your email address"
							/>
					</label>

					<label className="block p-2 text-xl">
						<p className="text-xl my-2">
							Password
						</p>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={changeEvent}
							className="form-input rounded-md block w-full text-black"
							placeholder="Create a strong password"
							/>
					</label>
					<span className="flex items-center justify-between p-2">
						<button
							className="form-input w-[200px] rounded-md p-2 bg-blue-500 font-semibold hover:bg-amber-500 hover:transition-all duration-700"
							onClick={submitForm}>
							Sign Up
						</button>
						<p className="text-lg">
							 Already have an account ? <Link
							 to="/login"
							 className="border-b-4 border-b-blue-500 hover:border-b-amber-400 hover:text-amber-400
							 font-semibold text-blue-500  hover:transition-all duration-500">Log In</Link>
						</p>
					</span>
			</form>
			<div hidden={hideErrors}>
					{
						errors.map((err) =>
								<p className="text-lg font-headings font-extrabold tracking-wider leading-loose text-red-500 animate-pulse" key={errors.err}>
									{err}
								</p>)
					}
			</div>
			<span hidden={hideMessage} className="text-lg font-headings font-extrabold tracking-wider leading-loose text-red-500 animate-pulse p-3 text-center">
					{ message }
			</span>
		</div>
	)
}