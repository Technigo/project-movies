import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <section className="list" key={`${movies.imdb_id}+1`}>
      {movies.map((movie) => {
        return (
          <div className="list-container" key={`${movie.vote_count}+2`}>
            <img key={`${movie.imdb_id}+3`} className="list-img" src={movie.poster_path ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : ''} alt="movie poster" />
            <div className="test" key={`${movie.imdb_id}+4`}>
              <Link
                key={`${movie.id}+5`}
                to={`/popular/${movie.id}`}
                className="list-title">{movie.original_title}
              </Link>
              <Link
                key={`${movie.release_date}+6`}
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