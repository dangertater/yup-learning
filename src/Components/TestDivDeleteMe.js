import React from "react"
import { styled } from "@mui/material/styles"
import Slide from "@mui/material/Slide"

let BlueBox = styled("div")`
	background-color: blue;
	height: 50px;
	width: 50px;
`

let TestDiv = (props) => {
	console.log("test", props.testBoxStateDelete)
	return (
		<div>
			<FormControlLabel
				control={
					<Switch
						checked={props.testBoxStateDelete}
						onChange={props.setTestBoxStateDelete("truthy")}
					/>
				}
				label="Show"
			/>
			<Slide
				direction="up"
				in={props.testBoxStateDelete}
				mountOnEnter
				unmountOnExit
			>
				<BlueBox
					sx={{
						display: `${props.testBoxStateDelete}`,
						width: `calc(100px + 16px)`,
					}}
				></BlueBox>
			</Slide>
		</div>
	)
}

export let TestButtonDeleteMe = (props) => {
	return (
		<button
			onClick={() => {
				props.setTestBoxStateDelete("truthy")
			}}
		>
			test
		</button>
	)
}
// <Box sx={{ width: `calc(100px + 16px)` }}>
// 	<FormControlLabel
// 		control={<Switch checked={checked} onChange={handleChange} />}
// 		label="Show"
// 	/>
// 	<Slide direction="up" in={checked} mountOnEnter unmountOnExit>
// 		{icon}
// 	</Slide>
// </Box>

export default function TestDivDeleteMe(props) {
	return (
		<>
			<TestDiv
				testBoxStateDelete={props.testBoxStateDelete}
				setTestBoxStateDelete={props.setTestBoxStateDelete}
			></TestDiv>
			<TestButtonDeleteMe
				testBoxStateDelete={props.testBoxStateDelete}
				setTestBoxStateDelete={props.setTestBoxStateDelete}
			></TestButtonDeleteMe>
		</>
	)
}
