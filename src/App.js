import React, { useState, useRef } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./App.css"
import Input from "./Components/Input"
import Div, { HorizontalDiv, HorizontalErrorDiv } from "./Components/Div"
import CustomButton from "./Components/CustomButton"
import { ValidateUser } from "./ValidateUser"
import { ErrorAlert } from "./Components/CustomAlert"
// import AuthProvider from "./Context/AuthContext"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { NavBar } from "./Components/Div"
import MenuButton, { Menu } from "./Components/MenuButton"

function App() {
	// TODO one day delete the defaults below
	let [name, setName] = useState("")
	let [password, setPassword] = useState("")
	let [email, setEmail] = useState("")
	let [beltRank, setBeltRank] = useState("")
	let [errorVisible, setErrorVisible] = useState("none")
	let [userDataObj, setUserDataObj] = useState("")
	let [menuVisible, setMenuVisible] = useState(false)
	// let userDataObj = useRef()
	let theme = createTheme({
		typography: {
			body1: { color: "#FFFFFF" },
			body2: { color: "yellow" },
			body3: { color: "green" },
		},
		palette: {
			primary: { main: "#e91e63" },
			secondary: { main: "#00a152" },
			third: { main: "#FFFFFF" },
		},
	})

	let firebaseAppInfoObj = {
		apiKey: "AIzaSyDJk14QjE1XUKfVAkK2eJrRt9k9nN3PjQw",
		authDomain: "coach-groupon.firebaseapp.com",
		projectId: "coach-groupon",
		storageBucket: "coach-groupon.appspot.com",
		messagingSenderId: "103305585378",
		appId: "1:103305585378:web:79d393434d5e7b58ea74bb",
		measurementId: "G-3MQQMFRZW7",
	}
	const app = initializeApp(firebaseAppInfoObj)
	let auth = getAuth(app)

	// add a setTimeout to mimic server response time
	let createUser = async (e) => {
		let userData = {
			name: name,
			email: email,
			password: password,
			beltRank: beltRank,
		}
		let isValid = await ValidateUser.isValid(userData)
		//-------
		if (isValid) {
			setUserDataObj(userData)
			setErrorVisible("userCreated")
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user
					console.log(user)
				})
				.catch((error) => {
					console.log("caught error", error)
				})
		} else {
			//TODO: change set error visible to set alert visable or dont forget.
			setErrorVisible("")
		}
	}
	let logIn = async (e) => {
		let userData = {
			name: name,
			email: email,
			password: password,
			beltRank: beltRank,
		}
		let isValid = await ValidateUser.isValid(userData)
		if (isValid) {
			window.alert("this will log you in one day")
		} else {
			setErrorVisible("")
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<>
				<NavBar>
					<MenuButton
						setMenuVisible={setMenuVisible}
						menuVisible={menuVisible}
					></MenuButton>
					<Menu
						menuVisible={menuVisible}
						setMenuVisible={setMenuVisible}
					></Menu>
				</NavBar>
				<Div>
					<h1>heck asdf</h1>
					<Input
						placeholder={"name"}
						userInfo={name}
						setUserInfo={setName}
					></Input>
					<Input
						placeholder={"password"}
						userInfo={password}
						setUserInfo={setPassword}
					></Input>
					<Input
						placeholder={"email"}
						userInfo={email}
						setUserInfo={setEmail}
					></Input>
					<Input
						placeholder={"belt rank"}
						userInfo={beltRank}
						setUserInfo={setBeltRank}
					></Input>
				</Div>
				<HorizontalDiv>
					<CustomButton
						function={createUser}
						buttonText={"Sign UP"}
						errorVisible={errorVisible}
					></CustomButton>
					<CustomButton function={logIn} buttonText={"Log In"}></CustomButton>
				</HorizontalDiv>
				<HorizontalErrorDiv>
					<ErrorAlert
						message={"The information entered is not valid, please resubmit."}
						errorVisible={errorVisible}
						setErrorVisible={setErrorVisible}
						userDataObj={userDataObj}
					></ErrorAlert>
				</HorizontalErrorDiv>
			</>
		</ThemeProvider>
	)
}

export default App
