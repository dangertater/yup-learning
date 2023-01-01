import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
const el = document.getElementById("root")
if(el === null) throw new Error('El is null')
const root:any = ReactDOM.createRoot(el)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
