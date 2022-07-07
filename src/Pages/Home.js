import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = ({ items, setSelectedQuiz }) => {
	const onQuizSelect = questions => {
		setSelectedQuiz(questions);
	};
	return (
		<div>
			<header>
				<div className="header">
					<h2>Welcome To QuizViz</h2>
					<Link to="/login">
						<button className="header-btn">LOGIN</button>
					</Link>
					<div className="rules">
						<h4>1. Please be free to choose any of the below Quizes.</h4>
						<h4>2. Each Quiz card contain 5 different Questions.</h4>
						<h4>3. Each question carries score of 10 points.</h4>
						<h4>
							4. At the end of Quiz don't forget to share score with your
							friends.
						</h4>
						<h4>5. All the Best and Enjoy.</h4>
					</div>
				</div>
			</header>

			<section className="card-section container">
				{items.map(each => (
					<div className="card-wrapper" title="Harry Potter">
						<div
							className="card-content"
							onClick={() => onQuizSelect(each.questions)}
						>
							<Link to={`/questions/${each.categoryName}`}>
								<img src={each.image} alt="buffer-img" />
								<div className="text-wrapper">
									<h3 className={each.font}>{each.categoryName}</h3>
									<p className={each.font}>{each.bodyText}</p>
								</div>
							</Link>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Home;
