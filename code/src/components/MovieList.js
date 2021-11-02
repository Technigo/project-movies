import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-container'>
      <section>
        {movies.map((movie) => (
          <div className='movie-card'>
            <img
              className='movie-img'
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <h1 key={movies.id}>{movie.original_title}</h1>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MovieList;
