import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Questionshp from "./Pages/Questionshp";
import Score from "./Pages/Score";
import { Categories } from "./Data/Categories";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home items={Categories} />} />
				<Route path="/questionshp" element={<Questionshp />} />
				<Route path="/score" element={<Score />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
