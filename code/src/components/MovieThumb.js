import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieThumb.css';

export const MovieThumb = ({ id, poster_path, title, release_date }) => {
  return (
    <Link to={`/movies/${id}`} className="movie-thumb-wrapper">
      <article>
        <img
          className="image-poster"
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div className="movie-text">
          <h1>{title}</h1>
          <p>Released {release_date}</p>
        </div>
      </article>
    </Link>
  );
};
