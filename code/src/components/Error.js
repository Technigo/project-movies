import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<main className="error">
			<p className="error__text">
				Something went wrong, please try again later
			</p>
			<Link to="/" className="error__button">
				Give it another go!
			</Link>
		</main>
	);
};
export default Error;
