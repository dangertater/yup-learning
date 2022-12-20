import React, { useEffect } from "react"
import { Alert } from "@mui/material"
import { Slide } from "@mui/material"

let StyledAlert = (props) => {
	let variableForSlideInProp = null
	let errorDirection = "up"
	if (props.errorVisible === "none") {
		variableForSlideInProp = false
	} else {
		variableForSlideInProp = true
	}
	// the goal of this double setTimeout is to have the error message slide back down instead of disappearing
	// but unsure why it doesn't work
	// if i force a rerender it disappears which makes sense
	// so i need to

	// HERE update with useRef!
	useEffect(() => {
		setTimeout(() => {
			errorDirection = "down"
			variableForSlideInProp = false
		}, 2000)
	}, [variableForSlideInProp])
	// setTimeout(() => {
	// 	props.setErrorVisible("none")
	// }, 2000)

	return (
		<Slide
			direction={`${errorDirection}`}
			in={variableForSlideInProp}
			mountOnEnter
			unmountOnExit
		>
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
