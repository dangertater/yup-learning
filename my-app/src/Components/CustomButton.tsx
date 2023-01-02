import React from "react"
import { Button } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function CustomButton(props: {
	errorVisible: string
	function: any
	buttonText: string
}) {
	let theme = useTheme()
	let buttonDisabled = false
	if (props.errorVisible === "userCreated") {
		buttonDisabled = true
	}
	return (
		<Button
			variant="contained"
			sx={{ bgcolor: theme.palette.secondary.main, margin: 1 }}
			onClick={() => {
				props.function()
			}}
			disabled={buttonDisabled}
		>
			{props.buttonText}
		</Button>
	)
}
