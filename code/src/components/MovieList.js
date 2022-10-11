import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ list }) => {
  return (
    <div className="movie-card">
      {list.map((movie) => {
        return (
          <>
            <Link key={movie.title} to={`/details/${movie.title}`}>{movie.title}</Link>
            <Link key={movie.release_date} to={`/details/${movie.release_date}`}>{movie.release_date}</Link>
          </>
        )
      })}
    </div>
  );
}

export default MovieList;