import React from "react"
import { Stack, Alert } from "@mui/material"

let StyledAlert = (props) => {
	return (
		<Stack spacing={2}>
			<Alert variant="filled" severity="error" sx={{ display: "none" }}>
				{props.message}
			</Alert>
		</Stack>
	)
}
export default function ErrorAlert({ message }) {
	return <StyledAlert message={message}></StyledAlert>
}
