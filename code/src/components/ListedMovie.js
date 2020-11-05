import React from 'react';
import { Link } from 'react-router-dom';

// Styling
import 'assets/MovieList.css';

const ListedMovie = ({ id, title, releaseDate, posterImgSrc }) => {
  return (
    <section className="movie-list--movie-wrapper">
      {/* Link to movie-page */}
      <Link key={id} to={`/movies/${id}`}>
        <img className="movie-list--img" src={posterImgSrc} alt={title} />

        {/* Content for hover-effect */}
        <div className="movie-list--details--wrapper">
          <h1 className="movie-list--details--title">{title}</h1>
          <p>{releaseDate}</p>
        </div>
      </Link>
    </section>
  );
};

export default ListedMovie;
