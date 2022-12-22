import React, { useState, useRef } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./App.css"
import Input from "./Components/Input"
import Div, { HorizontalDiv, HorizontalErrorDiv } from "./Components/Div"
import CustomButton from "./Components/CustomButton"
import { ValidateUser } from "./ValidateUser"
import { ErrorAlert } from "./Components/CustomAlert"
function App() {
	// TODO one day delete the defaults below
	let [name, setName] = useState("heck")
	let [password, setPassword] = useState("heckheck")
	let [email, setEmail] = useState("heck@gmail.com")
	let [beltRank, setBeltRank] = useState("blue")
	let [errorVisible, setErrorVisible] = useState("none")
	let [userDataObj, setUserDataObj] = useState("")
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
	// add a setTimeout to mimic server response time
	let createUser = async (e) => {
		let userData = {
			name: name,
			email: email,
			password: password,
			beltRank: beltRank,
		}
		let isValid = await ValidateUser.isValid(userData)
		if (isValid) {
			setUserDataObj(userData)
			setErrorVisible("userCreated")
			console.log("app userDataObj", userDataObj)
		} else {
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
