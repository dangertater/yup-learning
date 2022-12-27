import React from "react"
import WavesIcon from "@mui/icons-material/Waves"
import { styled } from "@mui/material/styles"

export function Menu(props) {
	let MenuDiv = styled("div")`
		background-color: yellow;
		height: 20px;
		width: 20px;
		visibility: ${props.menuVisible ? "visible" : "hidden"}; ;
	`
	return <MenuDiv menuVisible={props.menuVisible}>{props.children}</MenuDiv>
}

let handleMenuClick = (props) => {
	console.log(props.menuVisible)
	return (props.menuVisible = true ? false : true)
}

export default function MenuButton(props) {
	return (
		<WavesIcon
			onClick={() => {
				handleMenuClick(props)
			}}
		/>
	)
}
