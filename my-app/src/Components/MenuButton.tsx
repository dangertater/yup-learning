import React from "react"
import WavesIcon from "@mui/icons-material/Waves"
import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
const paths = {
	about: "/About",
	mission: "/ElMission",
	loginPage: "/LogInPage",
}

let MenuDiv = styled("div")`
	display: inline-flex;
	flex-flow: column;
	background-color: yellow;
	min-height: 20px;
	min-width: 20px;
	visibility: ${(props: { menuVisible: boolean }) =>
		props.menuVisible ? "visible" : "hidden"};
	padding-right: 10px;
`

type MenuProps = {
	menuVisible: boolean
	//is the below the correct syntax? aka func's val is to return a boolean...and then is void??
	setMenuVisible: (value: boolean) => void
	// children: React.ReactNode
}
// q4e, i commented out children in the above type as well as in MenuDiv component.
// I don't think i need props.children in the rendered component? and if I do, shouldn't the 'children: React.ReactNode' set children's type?
// same concept worked in AuthContext.tsx on line 11,12 and 33
export function Menu(props: MenuProps) {
	return (
		<MenuDiv menuVisible={props.menuVisible}>
			{/* {props.children} */}
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
				<li>
					<Link to={paths.loginPage}>login page, temporary</Link>
				</li>
			</ul>
		</MenuDiv>
	)
}
type handleMenuClickTypes = { handleMenuClick: () => void }

export default function MenuButton(props: handleMenuClickTypes) {
	return (
		<WavesIcon
			onClick={() => {
				props.handleMenuClick()
			}}
		/>
	)
}
