import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/Questions.css";
import "../Data/Categories";
const Questions = ({ questionArray }) => {
	const navigate = useNavigate();
	const { id: paramId } = useParams();
	const newQuiz = questionArray.filter(each => each.id === paramId);
	const [questionObject] = newQuiz;
	const { questions } = questionObject;
	const [index, setIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState([]);
	const onClickScoreHandler = () => {
		navigate(`/score/${paramId}`);
	};
	const onClickNextHandler = () => {
		if (index < 6) {
			setIndex(prev => prev + 1);
		}
	};
	const onClickPrevHandler = () => {
		if (!index) navigate("/");
		else setIndex(prev => prev - 1);
	};
	const optionClickHandler = (clickedOption, qi) => {
		if (clickedOption === questions[index].correctAns) {
			setScore(prev => prev + questions[index].points);
		}
		const clone = [...selectedOptions];
		clone[qi] = clickedOption;
		setSelectedOptions(clone);
	};
	useEffect(() => {
		localStorage.setItem("score", score);
		localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
	}, [score, selectedOptions]);
	return (
		<div>
			<header>
				<div className="header">
					<h2 className={paramId === "1" ? "hp-font" : "lord-font"}>
						{questions[index].category}
					</h2>
					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>
					<h4
						className={`text-color margin-bottom ${
							paramId === "1" ? "hp-font " : "lord-font"
						}`}
					>
						{questions[index].quote}
					</h4>
					<div className="score-container">
						<h4>Question: {questions[index].questionId}/5</h4>
						<h4 className="margin-auto">Score: {score}</h4>
					</div>
				</div>
			</header>
			<section className="question-section container">
				<div className="question-part">
					<h4 className={paramId === "1" ? "hp-font" : "lord-font"}>
						{questions[index].question}
					</h4>
					{questions[index].options.map((each, i) => (
						<button
							key={`button-key${i}`}
							type="button"
							className={`btns btn-grey ${
								Boolean(selectedOptions[index]) &&
								(each === questions[index].correctAns ? "btn-green" : "btn-red")
							}`}
							name="button"
							onClick={() => optionClickHandler(each, index)}
						>
							{each}
						</button>
					))}
				</div>
			</section>

			<div className="footer">
				<div className="footer-container">
					<div>
						<button className="footer-btn" onClick={onClickPrevHandler}>
							PREVIOUS
						</button>
					</div>
					<div className="margin-auto">
						<button
							className="footer-btn"
							onClick={
								questions[index].questionId === 5
									? onClickScoreHandler
									: onClickNextHandler
							}
						>
							{questions[index].questionId === 5 ? "SCORE" : "NEXT"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Questions;
