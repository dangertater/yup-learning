import React from "react"
import WavesIcon from "@mui/icons-material/Waves"
import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
const paths = { about: "/About", mission: "/ElMission" }

let MenuDiv = styled("div")`
	display: inline-flex;
	flex-flow: column;
	background-color: yellow;
	min-height: 20px;
	min-width: 20px;
	visibility: ${(props) => (props.menuVisible ? "visible" : "hidden")};
	padding-right: 10px;
`

export function Menu(props) {
	return (
		<MenuDiv menuVisible={props.menuVisible}>
			{props.children}
			<ul>
				<li>
					<Link to="/">home and or default</Link>
				</li>
				<li>
					<Link to={paths.about}>about page for info</Link>
				</li>

				<li>
					<Link to={paths.mission}>to the mission!</Link>
				</li>
			</ul>
		</MenuDiv>
	)
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
