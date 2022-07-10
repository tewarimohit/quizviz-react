import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/Questions.css";
import "../Data/Categories";


const Questions = ({ questionArray }) => {
	const [index, setIndex] = useState(0);
	const { id: paramId } = useParams();
	const indexRef = useRef(0);
	indexRef.current = index;

	const newQuiz = questionArray.filter((each) => each.id === paramId)
	const [questionObject] = newQuiz;
	const { questions } = questionObject;
	console.log(questions[indexRef.current]);

	const onClickNextHandler = () => {

		setIndex(() => index + 1)
	}
	useEffect(() => {
		if (index < 6) {
			console.log('This is index', index)
		}
	}, [index])


	return (
		<div>
			<header>
				<div className="header">
					<h2 className="hp-font">{questions[indexRef.current].category}</h2>
					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>
					<h4 className="hp-font text-color margin-bottom">{questions[indexRef.current].quote}</h4>
					<div className="score-container">
						<h4>Question: {questions[indexRef.current].questionId}/5</h4>
						<h4 className="margin-auto">Score: 10</h4>
					</div>
				</div>
			</header>

			<section className="question-section container">
				<div className="question-part">
					<h4 className="hp-font">{questions[indexRef.current].question}</h4>

					{questions[indexRef.current].options.map(each => (
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
							onClick={onClickNextHandler}
						>
							{questions[indexRef.current] === 5 ? 'SCORE' : 'NEXT'}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Questions;
