import React from 'react';
import { Link } from 'react-router-dom'

const MovieList = ({ popularList }) => {
  // console.log('popularList', popularList);
  // console.log('popularList.id', popularList.id);
  return (
    <section className="movie-container">
      {popularList.map((movie) => (
        <Link key={movie.id} to={`/details/${movie.id}`}>
          <img className="movie-img" src={movie.posterUrl} alt={movie.title} />
          <h3>{movie.title}</h3>
          {console.log('movie', movie)}
        </Link>
      ))}
    </section>
  )
};
export default MovieList;

/*
      <Link key={movie.id} to={`/details/${movie.id}`}>{list.name} </Link>

*/