import React from "react";
import "../css/loader.css";

export const LoadingSpinner = () => {
	return (
		<div className="loading-container">
			<div className="loading-overlay">
				<div className="loading-spinner" />
			</div>
		</div>
	);
};
