import React, { useState, useContext } from "react"
import { auth } from "../firebase"

let AuthContext = React.createContext()

let useAuth = () => {
	useContext(AuthContext)
}
export default function AuthProvider(props) {
	let [theUser, setTheUser] = useState()

	let signUpFunc = (name, password, email, beltRank) => {
		return auth.createUser()
	}

	let value = { theUser }
	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	)
}
