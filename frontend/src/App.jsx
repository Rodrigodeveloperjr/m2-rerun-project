import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Routes from "./routes"


const App = () =>  {

	return (

		<div>
			<Routes />

			<ToastContainer
			position="bottom-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			/>
		</div>
	)
}

export default App
