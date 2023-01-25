import logo from "./logo.svg";
// import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ShowAlumnos from "./components/ShowAlumnos";
import EditAlumnos from "./components/EditAlumnos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ShowAlumnos />} />
					<Route path="/edit" element={<EditAlumnos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
