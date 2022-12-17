import React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Container } from "./Components/Container"
import "./App.css"
import Input from "./Components/Input"
import Div from "./Div"
import CustomButton from "./Components/CustomButton"
function App() {
	let theme = createTheme({
		palette: { primary: { main: "#nnn" }, secondary: { main: "#fff" } },
	})
	return (
		<ThemeProvider theme={theme}>
			<>
				<Container />
				<Div>
					<Input placeholder={"name"}></Input>
					<Input placeholder={"number"}></Input>
					<Input placeholder={"email"}></Input>
				</Div>
			</>
		</ThemeProvider>
	)
}

export default App
