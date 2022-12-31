import React from "react"
import { Alert } from "@mui/material"
import { Slide } from "@mui/material"

let StyledAlert = (props) => {
	let variableForSlideInProp = props.errorVisible !== "none"
	let errorDirection: 'up'|'down'|'left'|'right' = "up"
	//TODO: the if statement rendering different objects is garbage
	// ----make one item render on alerts, and have it render the appropriate alert
	if (props.errorVisible === "userCreated") {
		//returns succuss alert of user being created
		return (
			<>
				<Slide
					direction={`${errorDirection}`}
					in={variableForSlideInProp}
					mountOnEnter
					unmountOnExit
				>
					<Alert
						variant="filled"
						severity="success"
						sx={{ display: `${props.errorVisible}` }}
					>
						{`User successfully created! Please log in with email '${props.userDataObj.email}' and password '${props.userDataObj.password}'`}
					</Alert>
				</Slide>
			</>
		)
	} else {
		//returns error alert of user not being created
		return (
			<>
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
			</>
		)
	}
}
export function ErrorAlert(props) {
	return (
		<StyledAlert
			message={props.message}
			errorVisible={props.errorVisible}
			setErrorVisible={props.setErrorVisible}
			userDataObj={props.userDataObj}
		></StyledAlert>
	)
}
