import React from 'react';
import { Link } from 'react-router-dom';
import SingleMovie from './SingleMovie';

const MovieList = ({ movieList }) => {
  return (
    <div className="movies-container">
      {movieList.map((movie) => {
        console.log(movie)
        return (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="movie-list-element">
            <SingleMovie movie={movie} />
          </Link>
        )
      })}
    </div>
  )
}

export default MovieList;