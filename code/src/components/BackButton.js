import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = ({ path, text }) => {
	return (
		<Link to={path}>
			<button type="button" className="back-button">
				<span>←</span>
				{text}
			</button>
		</Link>
	);
};
export default BackButton;
