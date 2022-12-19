import React from "react"
import { Stack, Alert } from "@mui/material"

let StyledAlert = (props) => {
	return (
		<Alert
			variant="filled"
			severity="error"
			sx={{ display: `${props.errorVisible}` }}
		>
			{props.message}
		</Alert>
	)
}
export default function ErrorAlert(props) {
	return (
		<StyledAlert
			message={props.message}
			errorVisible={props.errorVisible}
		></StyledAlert>
	)
}
// MUI fade in option below
{
	/* <FormControlLabel
  control={<Switch checked={checked} onChange={handleChange} />}
  label="Show"
/>
<Box sx={{ display: 'flex' }}>
  <Fade in={checked}>{icon}</Fade>
</Box> */
}

// let StyledAlert = (props) => {
// 	console.log("styledAlert props", props)
// 	return (
// 		<Stack spacing={2}>
// 			<Alert
// 				variant="filled"
// 				severity="error"
// 				sx={{ display: `${props.errorVisible}` }}
// 			>
// 				{props.message}
// 			</Alert>
// 		</Stack>
// 	)
// }
