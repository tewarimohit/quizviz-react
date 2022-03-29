import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Questions from "./Pages/Questions";
import Score from "./Pages/Score";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/questions" element={<Questions />} />
				<Route path="/score" element={<Score />} />
			</Routes>
		</div>
	);
};

export default App;
