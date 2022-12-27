import React from "react"
import WavesIcon from "@mui/icons-material/Waves"
import { styled } from "@mui/material/styles"
let MenuDiv = styled("div")`
	background-color: yellow;
	height: 20px;
	width: 20px;
	visibility: ${(props) => (props.menuVisible ? "visible" : "hidden")};
`

export function Menu(props) {
	return <MenuDiv menuVisible={props.menuVisible}>{props.children}</MenuDiv>
}

export default function MenuButton(props) {
	return (
		<WavesIcon
			onClick={() => {
				props.handleMenuClick()
			}}
		/>
	)
}
