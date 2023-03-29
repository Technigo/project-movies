import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  console.log(movies)
  return (
    <section className="listContainer">
      {movies.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className="list-element">
            {movie.original_title}
            <div className="details">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        )
      })}
    </section>
  );
}

export default MovieList