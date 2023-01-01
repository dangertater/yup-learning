import React, { useState, useContext, useEffect } from "react"
import app from "../firebase.js"
import { onAuthStateChanged } from "firebase/auth"
import { Auth } from "firebase/auth"
import { FirebaseApp } from "firebase/app"
import { getAuth } from "firebase/auth"


let AuthContext = React.createContext(null)

export let useAuth = () => {
	useContext(AuthContext)
}

export default function AuthProvider(props:any) {
	
	let [theUser, setTheUser] = useState()
	const auth = getAuth(app)
	useEffect(() => {
		// 'unsubscribe' is there because the 'app.onAuthStateChange' returns a method that when called it will "unsubscribe the OnAuth event"
		//https://www.youtube.com/watch?v=PKwu15ldZ7k&t=706s at 20:00
		//HERE, we need an observer (which i believe keeps track of data being manipulated?)
		//----
	let unsubscribe = onAuthStateChanged(Observer,(user:string)=>{
		setTheUser(user)
})
return unsubscribe
	}, [])

	let value:any = { theUser }
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	)
}

//https://github.com/firebase/firebase-js-sdk/pull/56 dated ass question from back in the day

//https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged
//----link to the docs, "nextOrObserver :  Observer" is provided as the first argument in the docs
//----but what in the fuck is nextOrObserver?
