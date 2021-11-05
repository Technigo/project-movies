import React from 'react';

import './Loader.css';

export const Loader = () => {

  return (
    <div className="loading-overlay">
			<div className="loading-spinner" />
		</div>
  );
};

export default Loader;