import React from "react"
import { styled } from "@mui/material/styles"
let StyledDiv = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20vh;
`

export default function Div({ children }) {
	return <StyledDiv>{children}</StyledDiv>
}
