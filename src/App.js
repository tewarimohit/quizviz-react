import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Questions from "./Pages/Questions";
import Score from "./Pages/Score";
import { Categories } from "./Data/Categories";

const App = () => {

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<Home items={Categories} />
					}
				/>
				<Route
					path="/questions/:id"
					element={<Questions questionArray={Categories} />}
				/>s
				<Route path="/score/:id" element={<Score questionArray={Categories}  />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
