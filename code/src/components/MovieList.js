import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <h2>Movie List component</h2>
      <section className='movie-list'>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className='movie-info'>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default MovieList;
