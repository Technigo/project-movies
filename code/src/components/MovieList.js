import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <section className="list">
      {movies.map((movie) => {
        return (
          <section>
            <div className="list-container">
              <Link
                key={movie.original_title}
                to={`/details/${movie.id}`}
                className="list-title">{movie.original_title}
              </Link>
              <img className="list-img" src={movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : ''} alt="movie poster" />
              <p className="list-date">Release date: {movie.release_date}</p>
            </div>
          </section>
        )
      })}
    </section>
  )
};