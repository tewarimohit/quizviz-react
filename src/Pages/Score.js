import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Score.css";

const Score = () => {
	return (
		<div>
			<header>
				<div className="header">
					<h2 className="hp-font">Harry Potter</h2>
					<Link to="/">
						<button className="header-btn">HOME</button>
					</Link>

					<h4>Your Final Score: 10/50</h4>
				</div>
			</header>

			<section className="question-section container">
				<div className="question-part">
					<h4 className="hp-font">What was the name of Harry Potter's pet ?</h4>
					<button type="button" className="btns btn-grey" name="button">
						Dobby
					</button>
					<button type="button" className="btns btn-grey btn-green" name="button">
						Hedwig
					</button>
					<button type="button" className="btns btn-grey" name="button">
						Scabbers
					</button>
				</div>

				<div className="question-part">
					<h4 className="hp-font">Who was the Godfather of Harry Potter ?</h4>
					<button type="button" className="btns btn-grey" name="button">
						Prof. Severus Snape
					</button>
					<button type="button" className="btns btn-grey btn-red" name="button">
						James Potter
					</button>
					<button type="button" className="btns btn-grey btn-green" name="button">
						Sirius Black
					</button>
				</div>

				<div className="question-part">
					<h4 className="hp-font">
						Which one of the following was not the Harry Potter's best friend ?
					</h4>
					<button type="button" className="btns btn-grey" name="button">
						Ronald Weasley
					</button>
					<button type="button" className="btns btn-grey btn-green" name="button">
						Draco Malfoy
					</button>
					<button type="button" className="btns btn-grey" name="button">
						Hermione Granger
					</button>
				</div>

				<div className="question-part">
					<h4 className="hp-font">
						Who gave Harry the cake on his Eleventh birthday ?
					</h4>
					<button type="button" className="btns btn-grey" name="button">
						Hermione Granger
					</button>
					<button type="button" className="btns btn-grey" name="button">
						Ronald Weasley
					</button>
					<button type="button" className="btns btn-grey btn-green" name="button">
						Rubeus Hagrid
					</button>
				</div>

				<div className="question-part">
					<h4 className="hp-font">What was the name of Harry Potter's cousin ?</h4>
					<button type="button" className="btns btn-grey btn-red" name="button">
						Fred
					</button>
					<button type="button" className="btns btn-grey btn-green" name="button">
						Dudley
					</button>
					<button type="button" className="btns btn-grey" name="button">
						George
					</button>
				</div>
			</section>
		</div>
	);
};

export default Score;
