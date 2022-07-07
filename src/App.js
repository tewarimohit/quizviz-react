import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Questions from "./Pages/Questions";
import Score from "./Pages/Score";
import { Categories } from "./Data/Categories";
import { useState } from "react";

const App = () => {
	const [selectedQuiz, setSelectedQuiz] = useState(null);

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<Home items={Categories} setSelectedQuiz={setSelectedQuiz} />
					}
				/>
				<Route
					path="/questions/:id"
					element={<Questions selectedQuiz={selectedQuiz} />}
				/>
				<Route path="/score" element={<Score />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
