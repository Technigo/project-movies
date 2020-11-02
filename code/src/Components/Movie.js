import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({id, title, release_date, poster_path}) => {
      return (
        <Link
          to={`/movie/${id}`}
          className="movie-wrapper"
          >
          <div className="movie-image-overlay"></div>
          <div className="movie-start-info-container">
            <h1>{title}</h1>
            <p>Released {release_date}</p>
          </div>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}>
          </img>
        </Link>
  )
}

export default Movie;