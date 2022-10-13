import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  return (
    <>
      <h1>Top rated movies</h1>
      <section className="movieList">

        {movieList.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="movieList-element">
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </Link>
          )
        })}
      </section>
    </>
  )
};