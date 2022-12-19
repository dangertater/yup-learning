import firebase from "firebase/app"
import "firebase/auth"

let app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
})

export const auth = app.auth()
export default app
// 'the reason we did it this way is because it is easy to switch between
//----development and production apps without recoding
// ----https://www.youtube.com/watch?v=PKwu15ldZ7k&t=706s at about 8 minutes
