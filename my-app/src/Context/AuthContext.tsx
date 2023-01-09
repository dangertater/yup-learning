import React, { useState, useContext, useEffect } from "react"
import app from "../firebase.js"
import { onAuthStateChanged } from "firebase/auth"
import { getAuth } from "firebase/auth"
import { AuthContext} from "../types/contexts.js"

export let useAuth = () => {
	useContext(AuthContext)
}
type AuthProviderProps={children:React.ReactNode}
export default function AuthProvider(props: AuthProviderProps) {
	let [theUser, setTheUser] = useState<string>('')
	//idk what below line does
	const auth = getAuth(app)
	useEffect(() => {
		// 'unsubscribe' is there because the 'app.onAuthStateChange' returns a method that when called it will "unsubscribe the OnAuth event"
		//https://www.youtube.com/watch?v=PKwu15ldZ7k&t=706s at 20:00
		//below line authorizes the user whenever anything is changed (2nd useEffect arg being blank?)
		let unsubscribe = onAuthStateChanged(auth, (user) => {
			
			if (!user) throw new Error("User Sucks ASss")
			if (!user.email) throw new Error("User has no email")
			//if they pass the auth on rerender it will set active user to user.email
			setTheUser(user.email)
		})
		//the video had me do this, idk why really
		return unsubscribe
	}, [])


	let value: string =  theUser 
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	)
}

//https://github.com/firebase/firebase-js-sdk/pull/56 dated ass question from back in the day

//https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged
//----link to the docs, "nextOrObserver :  Observer" is provided as the first argument in the docs
//----but what in the fuck is nextOrObserver?
