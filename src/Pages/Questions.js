import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/Questions.css";
import "../Data/Categories";

let dummyVal;
const Questions = ({ selectedQuiz }) => {
	const { id } = useParams();
	if (selectedQuiz) {
		dummyVal = selectedQuiz;
	}
	console.log(selectedQuiz);
	const [question, setQuestion] = useState(dummyVal[0]);
	const onNextClick = index => {
		setQuestion(() => dummyVal[2]);
	};
	return (
		<div>
			<header>
				<div className="header">
					<h2 className="hp-font">{question.category}</h2>

					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>

					<h4 className="hp-font text-color margin-bottom">{question.quote}</h4>

					<div className="score-container">
						<h4>Question: {question.questionId}/5</h4>
						<h4 className="margin-auto">Score: 10</h4>
					</div>
				</div>
			</header>

			<section className="question-section container">
				<div className="question-part">
					<h4 className="hp-font">{question.question}</h4>

					{question.options.map(each => (
						<button type="button" className="btns btn-grey" name="button">
							{each}
						</button>
					))}
				</div>
			</section>

			<div className="footer">
				<div className="footer-container">
					<Link to="/">
						<button className="footer-btn">PREVIOUS</button>
					</Link>
					<a className="margin-auto" href="">
						<button
							className="footer-btn"
							onClick={() => onNextClick(question.questionId)}
						>
							NEXT
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Questions;
