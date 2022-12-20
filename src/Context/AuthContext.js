import { getAuth } from "firebase/auth"
import React, { useState, useContext, useEffect } from "react"
import app from "../firebase"
let AuthContext = React.createContext()

export let useAuth = () => {
	useContext(AuthContext)
}
export let signUpFunc = (userData) => {
	getAuth()
		.createUser(userData)
		.then((userRecord) => {
			console.log(`created user ${userRecord.email}`)
		})
		.catch((error) => {
			console.log("error", error)
		})
}
export default function AuthProvider(props) {
	let [theUser, setTheUser] = useState()

	useEffect(() => {
		// 'unsubscribe' is there because the 'app.onAuthStateChange' returns a method that when called it will "unsubscibe the OnAuth event"
		//https://www.youtube.com/watch?v=PKwu15ldZ7k&t=706s at 20:00
		const unsubscribe = app.onAuthStateChange((user) => {
			setTheUser(user)
		})
		return unsubscribe
	}, [])

	let value = { theUser, signUpFunc }
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	)
}
