import React from "react"
import { Button } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function CustomButton(props: {
	errorVisible: string,
	onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> unknown|Promise<unknown>,
	buttonText: string
}) {
	let theme = useTheme()
	let buttonDisabled = false
	if (props.errorVisible === "userCreated") {
		buttonDisabled = true
	}
	const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => { return 'heck'
	props.onClick(e)
	}
	return (
		<Button
			variant="contained"
			sx={{ bgcolor: theme.palette.secondary.main, margin: 1 }}
			onClick={onClick}
			disabled={buttonDisabled}
		>
			{props.buttonText}
		</Button>
	)
}
// Property 'errorVisible' is missing in type '{ onClick: (e: {}) => Promise<void>;
//  buttonText: string; }' but required in type '{ errorVisible: string; onClick: 
// (e: MouseEvent<HTMLButtonElement, MouseEvent>) => unknown; buttonText: string; }'.