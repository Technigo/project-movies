import React from 'react';
// import { Link } from 'react-router-dom'
import { MovieCard } from 'components/MovieCard';

const MovieList = ({ popularList }) => {
  console.log('popularList', popularList);
  console.log('popularList.id', popularList.id);

  return (
    <section className="movie-card">
      {popularList.map((movie) => (
        <a key={movie.id}>
          <MovieCard
            title={popularList.title} />
        </a>
      ))}
    </section>

  )
};
export default MovieList;

/*
      <Link key={movie.id} to={`/details/${movie.id}`}>{list.name} </Link>

*/