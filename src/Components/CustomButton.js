import React from "react"
import { Button } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function CustomButton(props) {
	let theme = useTheme()

	console.log("button theme", theme)
	return (
		<Button
			variant="contained"
			sx={{ bgcolor: theme.palette.secondary.main, margin: 1 }}
			onClick={() => {
				props.function()
			}}
		>
			{props.buttonText}
		</Button>
	)
}
