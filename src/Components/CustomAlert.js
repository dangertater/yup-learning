import React from "react"
import { Alert } from "@mui/material"
import { Slide } from "@mui/material"

let StyledAlert = (props) => {
	console.log("styledAlert props", props)
	let variableForInProp = null
	let errorDirection = "up"
	if (props.errorVisible === "none") {
		variableForInProp = false
	} else {
		variableForInProp = true
	}
	setTimeout(() => {
		props.setErrorVisible("none")
	}, 1000)
	return (
		<Slide direction="up" in={variableForInProp} mountOnEnter unmountOnExit>
			<Alert
				variant="filled"
				severity="error"
				sx={{ display: `${props.errorVisible}` }}
			>
				{props.message}
			</Alert>
		</Slide>
	)
}
export function ErrorAlert(props) {
	return (
		<StyledAlert
			message={props.message}
			errorVisible={props.errorVisible}
			setErrorVisible={props.setErrorVisible}
		></StyledAlert>
	)
}
//as to make a branch commit delete this line
