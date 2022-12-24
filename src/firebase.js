import { initializeApp } from "firebase/app"
import "firebase/auth"

let app = initializeApp({
	apiKey: "AIzaSyDJk14QjE1XUKfVAkK2eJrRt9k9nN3PjQw",
	authDomain: "coach-groupon.firebaseapp.com",
	projectId: "coach-groupon",
	storageBucket: "coach-groupon.appspot.com",
	messagingSenderId: "103305585378",
	appId: "1:103305585378:web:79d393434d5e7b58ea74bb",
	measurementId: "G-3MQQMFRZW7",
})
export default app
// 'the reason we did it this way is because it is easy to switch between
//----development and production apps without recoding
// ----https://www.youtube.com/watch?v=PKwu15ldZ7k&t=706s at about 8 minutes
