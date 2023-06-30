import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'


import { Home } from './Home'
import { SignUp } from './Signup'
import { LogIn } from './Login'
import { Account } from './Account'

export const Paths = () => {
	return (
		<motion.div>
			<Routes>
				<Route exact path='/' element={<Home />}/>
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/account" element={<Account />} />
			</Routes>
		</motion.div>
	)
}