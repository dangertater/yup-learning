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
type StyledInputProps ={placeholder:string, userInfo:string, setUserInfo:Function}

export default function Input(props:StyledInputProps) {
	let theme = useTheme()
	return (
		<StyledInput
			placeholder={props.placeholder}
			sx={{
				bgcolor: theme.palette.primary.main,
			}}
			onInput={(e) => {
				console.log(e.target)
				return props.setUserInfo(e.target)
			}}
		></StyledInput>
	)
}
