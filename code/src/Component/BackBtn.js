import React from 'react';
import { Link } from 'react-router-dom';

//show in the movie details
const BackBtn = () => {
	return (
		<div className="Btn-container">
			<Link className="backBtn-link" to="/">
				<span className="back">Back</span>
			</Link>
		</div>
	);
};

export default BackBtn;
