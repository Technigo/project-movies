import React from 'react';
import { useHistory } from 'react-router-dom';

import 'styles/backbutton.css';

export const BackButton = () => {
  const history = useHistory();

  return (
    <button 
      onClick={history.goBack}
      className="back-button">
        <span className="arrows-wrapper">
          <i className="arrow left"></i>
          <i className="arrow left"></i>
          <i className="arrow left"></i>
        </span>
        Go Back
    </button>
  );
};