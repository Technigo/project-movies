import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Error.css';

const Error = () => {
	return (
		<>
			<main className="error">
				<p className="error__text">
					Something went wrong, please try again later
				</p>
				{/* <BackButton path={'/'} text={'Give it another go!'} /> */}
				<Link to="/" className="error__button">
					Give it another go!
				</Link>
			</main>
		</>
	);
};
export default Error;
