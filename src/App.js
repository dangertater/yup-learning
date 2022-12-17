import React, { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./App.css"
import Input from "./Components/Input"
import Div from "./Components/Div"
import CustomButton from "./Components/CustomButton"
import { ValidateUser } from "./ValidateUser"
function App() {
	let [name, setName] = useState()
	let [password, setPassword] = useState()
	let [email, setEmail] = useState()
	let [beltRank, setBeltRank] = useState()
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

	let createUser = async (e) => {
		// ValidateUser()
		let userData = {
			name: name,
			email: email,
			password: password,
			beltRank: beltRank,
		}
		let isValid = await ValidateUser.isValid(userData)
		console.log(isValid)
	}
	// name, password, email, beltRank
	return (
		<ThemeProvider theme={theme}>
			<>
				<Div>
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
					<CustomButton
						createUser={createUser}
						// onClick={createUser}
					></CustomButton>
				</Div>
			</>
		</ThemeProvider>
	)
}

export default App
