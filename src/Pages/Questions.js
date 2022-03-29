import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Questions.css";

const Questions = () => {
	return (
		<div>
			<header>
				<div className="header">
					<h2 className="hp-font">Harry Potter</h2>
					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>

					<h4 className="hp-font text-color margin-bottom">
						"It is our choices, that show what we truly are, far more than our
						abilities"
					</h4>

					<div className="score-container">
						<h4>Question: 1/5</h4>
						<h4 className="margin-auto">Score: 10</h4>
					</div>
				</div>
			</header>

			<section className="question-section container">
				<div className="question-part">
					<h4 className="hp-font">What was the name of Harry Potter's pet ?</h4>
					<button type="button" className="btns btn-grey" name="button">
						Dobby
					</button>
					<button
						type="button"
						className="btns btn-grey btn-green"
						name="button"
					>
						Hedwig
					</button>
					<button type="button" className="btns btn-grey" name="button">
						Scabbers
					</button>
				</div>
			</section>

			<div className="footer">
				<div className="footer-container">
					<a href="./index.html">
						<button className="footer-btn">PREVIOUS</button>
					</a>
					<a className="margin-auto" href="./secondquestion.html">
						<button className="footer-btn">NEXT</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Questions;
