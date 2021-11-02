import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </section>
  );
};

export default MovieList;