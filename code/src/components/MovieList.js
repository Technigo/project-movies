import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <section className='movie-container'>
      {movies
        .sort((a, b) => b.vote_average - a.vote_average)
        .map((movie) => (
          <div key={movie.original_title}>
            <Link to={`/details/${movie.id}`}>
              <div className='movie-card'>
                <img
                  className='movie-img'
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className='overlay'>
                  <div className='overlay-text'>
                    <h1 key={movies.id}>{movie.original_title}</h1>
                    <p>
                      {' '}
                      <span className='vote-list'>
                        {movie.vote_average}/10
                      </span>{' '}
                    </p>
                    <h2>Released:{movie.release_date}</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </section>
  );
};

export default MovieList;
