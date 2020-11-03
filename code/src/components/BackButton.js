import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = ({ path, text }) => {
	return (
		<Link to={path} className="back-button-wrapper">
			<button type="button" className="back-button">
				<span role="img" aria-label="arrow-emoji">
					←
				</span>
				{text}
			</button>
		</Link>
	);
};
export default BackButton;
