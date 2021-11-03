import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <section className='movie-list'>
        {movies.map((movie) => (
          <Link
            className='movie-card'
            key={movie.id}
            to={`/details/${movie.id}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className='movie-info'>
              <h2>{movie.title}</h2>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default MovieList;
