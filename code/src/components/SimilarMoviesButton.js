import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Styling
import 'assets/Buttons.css';

// ----------------------------------------------------------------------------------------

const SimilarMoviesButton = () => {
  const params = useParams();
  const URL = params.id + '/similar';

  return (
    <Link to={URL}>
      <button className="movie--similar-movies-button">
        <span className="movie--similar-movies-button--text">
          Find similar movies
        </span>
        <img
          alt="similar movies button"
          className="movie--similar-movies-button--img"
          src="../images/noun_back arrow_2223783.svg"
        />
      </button>
    </Link>
  );
};

export default SimilarMoviesButton;
