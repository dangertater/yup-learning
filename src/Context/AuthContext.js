import React, { useState, useContext, useEffect } from "react"
import { auth } from "../firebase"

let AuthContext = React.createContext()

let useAuth = () => {
	useContext(AuthContext)
}
export default function AuthProvider(props) {
	let [theUser, setTheUser] = useState()

	let signUpFunc = (name, password, email, beltRank) => {
		return auth.createUser(name, password, email, beltRank)
	}

	useEffect(() => {
		// 'unsubscribe' is there because the 'auth.onAuthStateChange' returns a method that when called it will "unsubscibe the OnAuth event"
		//https://www.youtube.com/watch?v=PKwu15ldZ7k&t=706s at 20:00
		const unsubscribe = auth.onAuthStateChange((user) => {
			setTheUser(user)
		})
		return unsubscribe
	}, [])

	let value = { theUser, signUpFunc }
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	)
}
