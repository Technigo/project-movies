import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Styling
import 'assets/Buttons.css';

// ----------------------------------------------------------------------------------------

const SimilarMoviesButton = (key) => {
  const params = useParams();
  const url = params.id + '/similar';

  return (
    <Link key={key} to={url}>
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
