import React, { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./App.css"
import Input from "./Components/Input"
import Div, { HorizontalDiv, HorizontalErrorDiv } from "./Components/Div"
import CustomButton from "./Components/CustomButton"
import { ValidateUser } from "./ValidateUser"
import { ErrorAlert } from "./Components/CustomAlert"
// import AuthProvider from "./Context/AuthContext"
import { Routes, Route, Link } from "react-router-dom"
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"
import { initializeApp } from "firebase/app"
import { NavBar } from "./Components/Div"
import MenuButton, { Menu } from "./Components/MenuButton"
import About from "./Components/About"
import ElMission from "./Components/ElMission"
import LogInPage from "./Components/LogInPage"

const paths = {
	about: "/About",
	mission: "/ElMission",
	loginPage: "/LogInPage",
}
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
	let handleMenuClick = () => {
		setMenuVisible(!menuVisible)
	}
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

	// TODO: add a setTimeout to mimic server response time
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
			//TODO: change set error visible to set alert visible or don't forget.
			setErrorVisible("")
		}
	}
	let logUserIn = (email, password) => {}
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			//prettier-ignore
			// (<Link to={paths.loginPage}></Link>).click()
			const user = userCredential.user
			// ...
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
		})
	let logIn = async (e) => {
		let userData = {
			name: name,
			email: email,
			password: password,
			beltRank: beltRank,
		}
		let isValid = await ValidateUser.isValid(userData)
		if (isValid) {
			// window.alert("this will log you in one day")
			logUserIn(userData.email, userData.password)
		} else {
			setErrorVisible("")
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<>
				<NavBar>
					<MenuButton handleMenuClick={handleMenuClick}></MenuButton>
					<Menu
						menuVisible={menuVisible}
						setMenuVisible={setMenuVisible}
					></Menu>
				</NavBar>
				<Div>
					<h1>heck</h1>
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
				<Routes>
					{/* below links in MenuButton.js */}
					<Route path="/" element={<p>this is the home page</p>}></Route>
					<Route path={paths.about} element={<About />}></Route>
					<Route path={paths.mission} element={<ElMission />}></Route>
					{/* Link is probably going in logInUser() on App.js */}
					<Route path={paths.loginPage} element={<LogInPage />}></Route>
				</Routes>
			</>
		</ThemeProvider>
	)
}

export default App
