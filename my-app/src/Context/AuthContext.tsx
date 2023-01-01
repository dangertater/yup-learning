import React, { useState, useContext, useEffect } from "react"
import app from "../firebase.js"
import { onAuthStateChanged } from "firebase/auth"
import { Auth } from "firebase/auth"

let AuthContext = React.createContext(null)

export let useAuth = () => {
	useContext(AuthContext)
}

export default function AuthProvider(props:any) {
	let [theUser, setTheUser] = useState()

	useEffect(() => {
		// 'unsubscribe' is there because the 'app.onAuthStateChange' returns a method that when called it will "unsubscribe the OnAuth event"
		//https://www.youtube.com/watch?v=PKwu15ldZ7k&t=706s at 20:00
		let unsubscribe = onAuthStateChanged(theUser =>{setTheUser(theUser)
		})
		return unsubscribe
	}, [])

	let value:any = { theUser }
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	)
}
