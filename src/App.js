import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Book} from "./pages/Book";
import Rate from "./pages/Rate";
import Support from "./pages/Support";
import HomeVehicle from "./pages/HomeVehicle";


function App() {
return (
	<Router>
		<Sidebar />
		<Routes>
			<Route path='/book' element={<Book/>} />
			<Route path='/rate' element={<Rate/>} />
			<Route path='/support' element={<Support/>} />
			<Route path='/homepage' element={<HomeVehicle />} />
			<Route path='/book' element={<Book />} />
		</Routes>
	</Router>
);
}

export default App;
