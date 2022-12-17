import React from "react"
import styled from "styled-components"
let StyledDiv = styled.div`
	/* padding: 10px;
	margin: 40px auto;
	width: 80%; */
`
export default function Div(props) {
	return <StyledDiv>{props.children}</StyledDiv>
}
