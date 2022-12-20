import React from "react"
import { Alert } from "@mui/material"
import { Slide } from "@mui/material"

let StyledAlert = (props) => {
	console.log("styledAlert props", props)
	let heck = "asdf"
	if (props.errorVisible === "none") {
		heck = false
	} else {
		heck = true
	}
	return (
		<Slide direction="up" in={heck} mountOnEnter unmountOnExit>
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
		></StyledAlert>
	)
}
//as to make a branch commit delete this line
