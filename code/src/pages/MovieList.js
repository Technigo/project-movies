import React from "react";
import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <div key={movie.original_title}>
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt="movie poster"
            ></img>
            <div>
              <h1>{movie.original_title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};
