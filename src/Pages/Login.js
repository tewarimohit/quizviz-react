import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
	return (
		<div>
			<div className="login-header">
				<h2>Welcome To QuizViz</h2>
			</div>
			<form className="login-bg">
				<div className="login">
					<h1 className="hd-l-font">Login</h1>
					<label htmlFor="username">Username :</label>
					<input
						type="text"
						name="username"
						varient="outlined"
						placeholder="Enter Username"
					/>
					<label htmlFor="password">Password :</label>
					<input
						type="Password"
						name="password"
						varient="outlined"
						placeholder="Enter Password"
					/>
					<button className="primary-btn ">Login</button>

					<Link to="/" className="primary-btn ">
						Continue Without Login{" "}
					</Link>

					<span className="login-close">X</span>
				</div>
			</form>
		</div>
	);
};

export default Login;
