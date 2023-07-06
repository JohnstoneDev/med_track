import {
	useState,
	useContext
 } from "react";

import {
	Link,
	useNavigate
 } from "react-router-dom";
import { ApplicationContext } from "../App";

export const LogIn = () => {
	const { dispatch } = useContext(ApplicationContext);

	const navigate = useNavigate()

	const [ formData, setFormData ] = useState({
		username : '',
		password : ''
	});

	const [ error, setError ] = useState("");
	const [ hideError, setHideError ] = useState(true)

	const changeEvent = (e) => {
		e.preventDefault()
		setFormData({...formData, [e.target.name] : e.target.value })
	}

	const submitForm = (e) => {
		e.preventDefault();

		if (formData.username && formData.password !== "") {
			fetch('/login',{
				method : 'POST',
				headers : {
					'Content-Type' : 'application/json'
				},
				body : JSON.stringify(formData)
			})
			.then(r => {
				if(r.ok) {
					r.json().then(user => {
						dispatch({
							type : 'LOGIN',
							payload : user
						})
						navigate('/')
					})
					throw r;
				}
				else {
					r.json().then(d => {

						setHideError(false)
						setError(d.error)

						setTimeout(() => {
							setHideError(true)
							setError("")
						},3000)

					})
				}
			})
		}
		else {
			setHideError(false)
			setError("Please Input Username & Password");

			setTimeout(() => {
				setHideError(true)
				setError("")
			},5000)
		}
	}

	return (
		<div className="flex flex-col p-24 justify-around w-screen h-full items-center">
			<h1 className="text-4xl p-2 border-b-4 border-b-blue-500 font-semibold">Dosage Tracker</h1>
			<form className="grid gap-2 w-[800px] justify-around rounded items-center m-2 p-12" onSubmit={submitForm}>
					<label className="block p-2">
						<p className="text-blue-500 w-fit font-extrabold">
							Log In
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
							placeholder="Enter your username"
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
							placeholder="Enter your password"
							/>
					</label>
					<span className="flex items-center justify-between p-2">
						<button
							className="form-input w-[200px] rounded-md p-2 bg-blue-500 font-semibold hover:bg-amber-500 hover:transition-all duration-700"
							onClick={submitForm}>
							Log In
						</button>
						<p className="text-lg">
							 Don't have an account ? <Link
							 to="/signup"
							 className="font-semibold text-blue-500 border-b-4 border-b-blue-500
							  hover:border-b-amber-400 hover:text-amber-400 hover:transition-all duration-500">Sign Up</Link>
						</p>
					</span>
			</form>
			<span
				className="text-lg font-headings font-extrabold tracking-wider leading-loose text-red-500
				animate-pulse p-3"
				hidden={hideError}>
				{ error }
			</span>
		</div>
	)
}