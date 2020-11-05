import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = ({ text }) => {
	const history = useHistory();
	return (
		//<Link to={path} className="back-button-wrapper">
		<button
			type="button"
			className="back-button"
			onClick={() => history.goBack()}
		>
			<span role="img" aria-label="arrow-emoji">
				←
			</span>
			{text}
		</button>
		//</Link>
	);
};
export default BackButton;
