import React, { useState, useContext, useEffect } from "react"
import app from "../firebase"

let AuthContext = React.createContext()

export let useAuth = () => {
	useContext(AuthContext)
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

	let value = { theUser }
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	)
}
