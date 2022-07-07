import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Questions.css";
import "../Data/Categories";

const Questions = ({ items }) => {
	console.log(items);
	
	return (
		items.forEach((element)=>
		<div>
			<header>
				<div className="header">
						<h2 className="hp-font">{element.category}</h2>
				
					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>

					{[0].id === items[0].category_id && (
						<h4 className="hp-font text-color margin-bottom">
							{items[0].quote}
						</h4>
					)}

					<div className="score-container">
						<h4>Question: 1/5</h4>
						<h4 className="margin-auto">Score: 10</h4>
					</div>
				</div>
			</header>

			<section className="question-section container">
				<div className="question-part">
					{[0].id === items[0].category_id && (
						<h4 className="hp-font">{items[0].question}</h4>
					)}
					{[0].id === items[0].category_id && (
						<button type="button" className="btns btn-grey" name="button">
							{items[0].options[0].a}
						</button>
					)}
					{[0].id === items[0].category_id && (
						<button
							type="button"
							className="btns btn-grey btn-green"
							name="button"
						>
							{items[0].options[0].b}
						</button>
					)}
					{[0].id === items[0].category_id && (
						<button type="button" className="btns btn-grey" name="button">
							{items[0].options[0].c}
						</button>
					)}
				</div>
			</section>

			<div className="footer">
				<div className="footer-container">
					<Link to="/">
						<button className="footer-btn">PREVIOUS</button>
					</Link>
					<a className="margin-auto" href="./secondquestion.html">
						<button className="footer-btn">NEXT</button>
					</a>
				</div>
			</div>
		</div>)
	);
};

export default Questions;
