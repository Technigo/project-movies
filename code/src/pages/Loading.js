import React from "react"; //import React

//Loading screen while the data is being fetched from the API

export const Loading = () => {
	return (
		<div className="loading-overlay">
			<div className="loading-ball bounce"></div>
		</div>
	);
};
