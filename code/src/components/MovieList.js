import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <Link
          className=""
          key={movie.id}
          to={`/MovieDetails/${movie.id}`}>

          <img
            // className=""
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path} `}
            alt={movie.title} />
        </Link>
      ))}
    </section>
  )
}

export default MovieList;

