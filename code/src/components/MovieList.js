import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((singleMovie) => {
        return <Link key={singleMovie.id} to={`/details/${singleMovie.title}`}>{singleMovie.title}</Link>
      })}
    </div>
  );
}

export default MovieList;