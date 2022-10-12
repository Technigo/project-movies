import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ list }) => {
  return (
    <div>
      {list.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}>
            {movie.title}
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="movie_poster" />
          </Link>
        )
      })}
    </div>
  );
}

export default MovieList;

/* import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ list }) => {
  return (
    <div className="popular-list">
      {list.map((movie) => {
        return (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie_poster" />
          </Link>
        )
      })}
    </div>
  );
}

export default MovieList; */
