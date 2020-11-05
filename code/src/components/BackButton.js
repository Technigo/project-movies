import React from 'react';
import { useHistory } from 'react-router-dom';

// Styling
import 'assets/Buttons.css';

// ----------------------------------------------------------------------------------------

export const BackButton = () => {
  const history = useHistory();
  return (
    <button className="movie--back-button" onClick={history.goBack}>
      <img
        alt="back-button"
        className="movie--back-button--img"
        src={process.env.PUBLIC_URL + '/images/noun_back arrow_2223783.svg'}
      />
      <span className="movie--back-button--text">Go back</span>
    </button>
  );
};

// ----------------------------------------------------------------------------------------

export const RoundBackButton = () => {
  const history = useHistory();
  return (
    <button
      className="movie--similar-movies--back-button"
      onClick={history.goBack}
    >
      <img
        alt="back-button"
        className="movie--similar-movies--back-button--img"
        src={process.env.PUBLIC_URL + '/images/noun_back arrow_2223783.svg'}
      />
    </button>
  );
};
