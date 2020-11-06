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
			{text}
		</button>
	);
};
export default BackButton;
