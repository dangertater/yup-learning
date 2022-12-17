import React from "react"
import { Stack, Alert } from "@mui/material"

let StyledAlert = (props) => {
	console.log("styledAlert props", props)
	return (
		<Stack spacing={2}>
			<Alert
				variant="filled"
				severity="error"
				sx={{ display: `${props.errorVisible}` }}
			>
				{props.message}
			</Alert>
		</Stack>
	)
}
export default function ErrorAlert(props) {
	return (
		<StyledAlert
			message={props.message}
			errorVisible={props.errorVisible}
		></StyledAlert>
	)
}
