import * as yup from "yup"
// import { string } from "yup/lib/locale"

let validBelts = ["white", "blue", "purple", "brown", "black"]

export const ValidateUser = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(4).max(10),
	beltRank: yup
	
		.string()
		.test("isValidBelt", "this is not the belt you seek", (value) => {
			if(value === undefined) return false
			return validBelts.includes(value)
		}),
})

