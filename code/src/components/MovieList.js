import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <section className="list">
      {movies.map((movie) => {
        return (
          <div key={movies.homepage} className="list-container">
            <img key={movies.poster_path} className="list-img" src={movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : ''} alt="movie poster" />
            <div className="test" key={`${movies.budget}55`}>
              <Link
                key={movie.original_title}
                to={`/popular/${movie.id}`}
                className="list-title">{movie.original_title}
              </Link>
              <Link
                key={movie.release_date}
                to={`/popular/${movie.id}`}
                className="list-date">Release date: {movie.release_date}
              </Link>
            </div>
          </div>
        )
      })}
    </section>
  )
};