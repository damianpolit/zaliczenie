import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Bmi from "./pages/Bmi/Bmi";
import Timer from "./pages/Timer/Timer";
import Przewalutowanie from "./pages/Przewalutowanie/Przewalutowanie";

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Bmi/>} />
				<Route path="/timer" element={<Timer />} />
				<Route path="/bmi" element={<Bmi />} />
				<Route path="/kantor" element={<Przewalutowanie />} />
			</Routes>
		</>
	);
};

export default App;
