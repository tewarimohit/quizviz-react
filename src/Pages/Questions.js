import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Questions.css";
import "../Data/Categories";

const options=['a) how','b) are' ,'c) you'];

const Questions = ({selectedQuiz}) => {
	console.log(selectedQuiz);
	
	return (
		<div>
			<header>
				<div className="header">
						<h2 className="hp-font">Category Name</h2>
				
					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>

					
						<h4 className="hp-font text-color margin-bottom">
							Quote
						</h4>
					

					<div className="score-container">
						<h4>Question: 1/5</h4>
						<h4 className="margin-auto">Score: 10</h4>
					</div>
				</div>
			</header>

			<section className="question-section container">
				<div className="question-part">
				
						<h4 className="hp-font">question</h4>
					
					
						{options.map((each)=>(<button type="button" className="btns btn-grey" name="button">
							{each}
							</button>))}
					
					
					
					
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
		</div>
		
	);
};

export default Questions;
