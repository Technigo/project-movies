import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
  return (
    <section className="list">
      {movies.map((movie)=> {
        return <Link 
                  key={movie.id}
                  to={`/details/${movie.id}`}
                  className="list-element"
                  >{movie.original_title}
                  <img className="list-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  </Link>
        })}
    </section>
  )
}

export default MovieList;