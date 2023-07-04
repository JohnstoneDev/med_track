import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
	const [ formData, setFormData ] = useState({
		username : '',
		email : "",
		password : ''
	});

	const changeEvent = (e) => {
		e.preventDefault()
		setFormData({...formData, [e.target.name] : e.target.value})
	}

	const submitForm = (e) => {
		e.preventDefault();
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
		</div>
	)
}