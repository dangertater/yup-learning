import React from "react"
import { styled } from "@mui/material/styles"

let StyledInput = styled("input")`
	background-color: white;
`

export default function Input(props) {
	return <StyledInput placeholder={props.placeholder}></StyledInput>
}
