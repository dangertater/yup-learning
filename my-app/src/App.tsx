import React, { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./App.css"
import Input from "./Components/Input"
import Div, { HorizontalDiv, HorizontalErrorDiv } from "./Components/Div"
import CustomButton from "./Components/CustomButton"
import { ValidateUser } from "./ValidateUser"
import { ErrorAlert } from "./Components/CustomAlert"
import { Routes, Route } from "react-router-dom"
import {
	getAuth,	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"
import { initializeApp } from "firebase/app"
import { NavBar } from "./Components/Div"
import MenuButton, { Menu } from "./Components/MenuButton"
import About from "./Components/About"
import ElMission from "./Components/ElMission"
import LogInPage from "./Components/LogInPage"
import { UserData } from "./types/user"
export declare interface AppProps {children?: React.ReactNode;}

const paths = {
	about: "/About",
	mission: "/ElMission",
	loginPage: "/LogInPage",
}

//q4e: i changed 'function' before App below to 'const' to get the React.FC to work...should i not have?
const App:React.FC = (props) =>{
	// TODO one day delete the defaults below
	let [name, setName] = useState("")
	let [password, setPassword] = useState("")
	let [email, setEmail] = useState("")
	let [beltRank, setBeltRank] = useState("")
	let [errorVisible, setErrorVisible] = useState("none")
	let [userDataObj, setUserDataObj] = useState<UserData|undefined>()
	let [menuVisible, setMenuVisible] = useState(false)
	//eric's example below
	// let tempThing : () => string = (heck?:string)=>{return '' } 
	// tempThing = ()=>{return {}}
	//eric's example above
	// let userDataObj = useRef()
	let handleMenuClick = () => {
		setMenuVisible(!menuVisible)
	}
	let theme = createTheme({
		typography:  {
			body1: { color: "#FFFFFF" },
			body2: { color: "yellow" },
		},
		palette: {
			primary: { main: "#e91e63" },
			secondary: { main: "#00a152" },
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

	// TODO: add a setTimeout to mimic server response time
	let createUser = async (e:unknown) => {
    let auth = getAuth(app)
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
			console.log(userDataObj)
			setErrorVisible("userCreated")
      //
			createUserWithEmailAndPassword( auth, email, password)
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
	let logIn = async (e:{}) => {
		let userData = {
			name: name,
			email: email,
			password: password,
			beltRank: beltRank,
		}
		let isValid = await ValidateUser.isValid(userData)
		if (isValid) {
			console.log("pre sign in func")
			let auth = getAuth(app)
			signInWithEmailAndPassword(auth,userData.email, userData.password)
				.then((userCredential) => {
					let user = userCredential.user
        console.log('login function user',user)
					// https://firebase.google.com/docs/auth/web/manage-users documentation on authenticating users
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					console.log(
						"signInWEmailAndPass, error code",
						errorCode,
						"errorMessage",
						errorMessage
					)
				})
		} else {
			setErrorVisible("")
		}
	}

	// interface ErrorAlert {message:string,errorVisible:string,setErrorVisible:string,userDataObj:{}}

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
						onClick={createUser}
						buttonText={"Sign UP"}
						errorVisible={errorVisible}
					></CustomButton>
					<CustomButton errorVisible={errorVisible} onClick={logIn} buttonText={"Log In"}></CustomButton>
				</HorizontalDiv>
				<HorizontalErrorDiv>
					<ErrorAlert
						message={"The information entered is not valid, please resubmit."}
						errorVisible={errorVisible}
						setErrorVisible={setErrorVisible}
					></ErrorAlert>
				</HorizontalErrorDiv>
				<Routes>
					{/* below links in MenuButton.js */}
					<Route path="/" element={<p>this is the home page</p>}></Route>
					<Route path={paths.about} element={<About />}></Route>
					<Route path={paths.mission} element={<ElMission />}></Route>
					<Route path={paths.loginPage} element={<LogInPage />}></Route>
				</Routes>
			</>
		</ThemeProvider>
	)
}

export default App
