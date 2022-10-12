import React from 'react';
import { Link } from 'react-router-dom';

const PopularList = ({ movies }) => {
  return (
    <section className="list">
      {movies.map((movie) => {
        console.log(movie)
        return (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}>
            {/*
              to={`/details/${movie.name}`}
            className="list-element">{movie.name}
            */}
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster.path}`} alt={movie.title} />
          </Link>
        // eslint-disable-next-line brace-style
        ) })}
    </section>
  )
}

export default PopularList;