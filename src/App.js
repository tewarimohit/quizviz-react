import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Questions from "./Pages/Questions";
import Score from "./Pages/Score";
import { Categories } from "./Data/Categories";
import { useState } from "react";

const App = () => {
	const [question, setQuestion] = useState('');

	const SelectedQuizHandler = (selectedQuiz) => {
		const questions = [
			...selectedQuiz
		];
		setQuestion(questions);
	};
	console.log(question, 'qqqqqqqqqq');

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<Home items={Categories} /* onCardClick={SelectedQuizHandler} */ />
					}
				/>
				<Route
					path="/questions/:id"
					element={<Questions questionArray={Categories} />}
				/>s
				<Route path="/score" element={<Score />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
