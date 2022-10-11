import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((singleMovie) => {
        return (
          <Link
            key={singleMovie.id}
            to={`/details/${singleMovie.title}`}>
            {singleMovie.title}
            <img
              src={`https://image.tmdb.org/t/p/w342${singleMovie.poster_path}`}
              alt="movie_poster" />
          </Link>
        )
      })}
    </div>
  );
}

export default MovieList;