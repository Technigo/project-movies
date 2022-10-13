import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ list }) => {
  return (
    <section className="list">
      {list.map((movie) => (
        <div className="list-item">
          <Link key={movie.list} to={`/moviedetails/${movie.id}`}>
            {/* <h2>{movie.title}</h2> */}
            <img
              src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title} />
          </Link>
        </div>
      ))}
    </section>
  );
}