import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ id, title, releaseDate, posterImgSrc }) => {
  return (
    <section className="movie-list--wrapper">
      <Link key={id} to={`/movies/${id}`}>
        <img className="movie-list--img" src={posterImgSrc} alt={title} />
        <div className="movie-list--details--wrapper">
          <h1>{title}</h1>
          <p>{releaseDate}</p>
        </div>
      </Link>
    </section>
  );
};

export default MovieList;
