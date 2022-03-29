import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<header>
				<div className="header">
					<h2>Welcome To QuizViz</h2>
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
				<div className="card-wrapper" title="Harry Potter">
					<Link to="/questions">
						<div className="card-content">
							<img src="./assets/harry potter.jpg" alt="buffer-img" />
							<div className="text-wrapper">
								<h3 className="hp-font">Harry potter</h3>
								<p className="hp-font">
									MR H POTTER <br />
									The Cupboard under the Stairs, <br />
									4 Privet Drive, <br />
									Little Whinging,
									<br />
									Surrey
								</p>
							</div>
						</div>
					</Link>
				</div>

				<div className="card-wrapper">
					<Link to="/">
						<img src="./assets/My precious.jpg" alt="buffer-img" />
						<div className="text-wrapper">
							<h3 className="lord-font">Lord of the Rings</h3>
							<p className="lord-font">
								"Not All Those <br />
								who Wander <br />
								are Lost."
							</p>
							<br />
							<p className="lord-font">— Bilbo Baggins.</p>
						</div>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
