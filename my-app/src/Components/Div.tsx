import React from "react"
import { styled } from "@mui/material/styles"
let StyledDiv = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20vh;
`
let HorizontalStyledDiv = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 4px;
`
let HorizontalErrorStyledDiv = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 4px;
`
let StyledNavBar = styled("div")`
	background-color: red;
	width: 100%;
	height: 10vh;
`
type Props ={ children?:React.ReactNode}

export default function Div({ children }:Props) {
	return <StyledDiv>{children}</StyledDiv>
}

export function HorizontalDiv({ children }:Props) {
	return <HorizontalStyledDiv>{children}</HorizontalStyledDiv>
}

export function HorizontalErrorDiv({ children }:Props) {
	return <HorizontalErrorStyledDiv>{children}</HorizontalErrorStyledDiv>
}

export function NavBar({ children }:Props) {
	return <StyledNavBar>{children}</StyledNavBar>
}
