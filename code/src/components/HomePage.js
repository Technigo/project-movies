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
		<div className="showcase">
				<h1 className="codeflix">CODEFLIX</h1>
				<div className="showcase-content">
				<h1>Log-in Anywhere.</h1>
					<form className="submit-form" onSubmit={handleSubmit}>
						<label>
							<input
								className="api-input"
								type="text"
								placeholder="Your API key"
								name="api-key"
								value={userApiKey}
								onChange={handleInputChange}
							></input>
						</label>
						<button class="btn btn-submit" type="submit">
							Go
						</button>
					</form>
					<a href="https://www.themoviedb.org/signup" class="btn btn-sign-up">
						SIGN UP FOR YOUR API ACCOUNT
						<i class="fas fa-chevron-right btn-icon"></i>
					</a>
			</div>
		</div>
	);
};

export default HomePage;
