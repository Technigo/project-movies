import React from 'react';

const List = ({ movies }) => {
  return (
    <section>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </section>
  );
};

export default List;
