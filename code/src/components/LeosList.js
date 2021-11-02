import React from 'react';
import { Link } from 'react-router-dom';

const LeosList = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <Link to={`movies/${movie.id}`}>
          <div key={movie.id}>{movie.title}</div>
        </Link>
      ))}
    </section>
  );
};

export default LeosList;
