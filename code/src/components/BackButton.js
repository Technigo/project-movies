import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = ({ text }) => {
	const history = useHistory();
	return (
		<button
			type="button"
			className="back__button"
			onClick={() => history.goBack()}
		>
			<img
				src="../Images/arrow.svg"
				alt="back button arrow"
				className="back__button--arrow"
			/>
			{text}
		</button>
	);
};
export default BackButton;
