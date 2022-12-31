import React from "react"
import { styled, useTheme } from "@mui/material/styles"

let StyledInput = styled("input")`
	margin: 4px;
	border-radius: 7px;
	color: white;
	&::placeholder {
		color: white;
	}
`

export default function Input(props) {
	let theme = useTheme()
	return (
		<StyledInput
			placeholder={props.placeholder}
			sx={{
				bgcolor: theme.palette.primary.main,
			}}
			onInput={(e) => {
				return props.setUserInfo(e.target.value)
			}}
		></StyledInput>
	)
}
