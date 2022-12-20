import React, { useEffect } from "react"
import { Alert } from "@mui/material"
import { Slide, Fade } from "@mui/material"

let StyledAlert = (props) => {
	let variableForSlideInProp = props.errorVisible !== "none"
	let errorDirection = "up"
	let variableForFade = true
	console.log({ errorDirection, variableForSlideInProp })

	return (
		<>
			<Slide
				direction={`${errorDirection}`}
				in={variableForSlideInProp}
				mountOnEnter
				unmountOnExit
			>
				<Fade in={variableForSlideInProp}>
					<Alert
						variant="filled"
						severity="error"
						sx={{ display: `${props.errorVisible}` }}
					>
						{props.message}
					</Alert>
				</Fade>
			</Slide>
		</>
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
