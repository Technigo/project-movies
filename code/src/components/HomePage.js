import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = ({ userApiKey, setUserApiKey }) => {
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push("/all-movies");
	};

	const handleInputChange = (e) => {
		setUserApiKey(e.target.value);
	};
	return (
		<div className="main">
			<h1>Welcome to project-movies!</h1>
			<p>Log-in below using your TMDB API key. Don't have one? Sign up here:</p>
			<a href="https://www.themoviedb.org/signup"><button>Go to TMDB</button></a>
			<form className="api-form" onSubmit={handleSubmit}>
				<label className="api-label">
					Enter Key:
					<input
						className="api-input"
						type="text"
						placeholder="Your API key here"
						name="api-key"
						value={userApiKey}
						onChange={handleInputChange}
					></input>
				</label>
				<button className="submit-button" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default HomePage;
