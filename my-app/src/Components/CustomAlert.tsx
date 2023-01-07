import React from "react"
import { Alert } from "@mui/material"
import { Slide } from "@mui/material"

// interface StyledAlertProps {errorVisible: string, userDataObj:object}
//q4e: the below 'any' effects the .email oon line 31 but 'string' does not.
//----this is odd as .email is a string, so does the 'any' property get passed to all children of the object while others
//----like 'string' do not?
// interface StyledAlertProps {[key:string]: any}
// let StyledAlert: React.FC<StyledAlertProps> = (props) => {
type StyledAlertProps = {
	message: string,
	errorVisible: string,
	setErrorVisible: Function,
	userEmail:string,
	userPassword:string
}
//how do i set the type of the nested child, following syntax from chatgpt 'set nested child type'
let StyledAlert = (props: StyledAlertProps) => {
	let variableForSlideInProp = props.errorVisible !== "none"
	let errorDirection: "up" | "down" | "left" | "right" = "up"

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
						{`User successfully created! Please log in with email '${props.userEmail}' and password '${props.userPassword}'`}
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

type CustomAlertProps = {
	message: string,
	errorVisible: string,
	// setErrorVisible: Function,
	//q4e - its not mad about the above line, but I believe the below line is the correct syntax?
	setErrorVisible: (value:string) => void
	userEmail:string
	userPassword:string
	//app.tsx is mad about the things in the object
}
export function CustomAlert(props: CustomAlertProps) {
	return (
		<StyledAlert
			message={props.message}
			errorVisible={props.errorVisible}
			setErrorVisible={props.setErrorVisible}
			userEmail={props.userEmail}
			userPassword={props.userPassword}
		></StyledAlert>
	)
}
