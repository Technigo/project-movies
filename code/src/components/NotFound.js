import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
	const navigate = useNavigate();
	const onHomeButtonClick = () => {
		navigate('/');
	};

	return (
		<div className="not-found">
			<p className="error">Sorry this page was not found</p>
			<button className="home-page" onClick={onHomeButtonClick}>
				Go to homepage
			</button>
		</div>
	);
};

export default NotFound;
