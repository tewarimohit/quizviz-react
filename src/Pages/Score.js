import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/Score.css";

const Score = ({ questionArray }) => {
	const [finalScore, setFinalScore] = useState(0);
	const [userSelected, setUserSelected] = useState([]);
	const { id: paramId } = useParams();
	const newQuiz = questionArray.filter(each => each.id === paramId);
	const [questionObject] = newQuiz;
	const { questions } = questionObject;
	useEffect(() => {
		setFinalScore(JSON.parse(localStorage.getItem("score")));
		setUserSelected(JSON.parse(localStorage.getItem("selectedOptions")) || []);
	}, []);
	return (
		<div>
			<header>
				<div className="header">
					<h2 className={paramId === 1 ? "hp-font" : "lord-font"}>
						{questionObject.categoryName}
					</h2>
					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>

					<h4>Your Final Score: {finalScore}/50</h4>
				</div>
			</header>

			<section className="question-section container">
				{questions.map((each, i) => (
					<div key={i} className="question-part">
						<h4 className={paramId === 1 ? "hp-font" : "lord-font"}>
							{each.question}
						</h4>
						{each.options.map((el, ind) => (
							<button
								key={`button-key${ind}`}
								type="button"
								className={
									el === each.correctAns ? `btns btn-green` : "btns btn-red"
								}
								name="button"
							>
								{el}
							</button>
						))}
						<h4>You Selected :- {userSelected[i]}</h4>
					</div>
				))}
			</section>
		</div>
	);
};

export default Score;
