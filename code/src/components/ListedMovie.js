import React from 'react';
import { Link } from 'react-router-dom';

// Styling
import 'assets/MovieList.css';

// ----------------------------------------------------------------------------------------

const ListedMovie = ({ id, title, releaseDate, posterImgSrc }) => {
  return (
    <Link to={`/movies/${id}`} className="movie-list--movie-wrapper">
      <img className="movie-list--img" src={posterImgSrc} alt={title} />

      {/* Content for hover-effect */}
      <div className="movie-list--details--wrapper">
        <h1 className="movie-list--details--title">{title}</h1>
        <p>{releaseDate}</p>
      </div>
    </Link>
  );
};

export default ListedMovie;
