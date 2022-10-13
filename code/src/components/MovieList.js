import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ list }) => {
  return (
    <section className="list">
      {list.map((movie) => (
        <Link key={movie.list} to={`/moviedetails/${movie.id}`}>
          <div
            className="list-item"
            style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w342/${movie.poster_path})` }}
            alt={movie.title}>
            <div className="overlay">
              <h1>{movie.title}</h1>
              <p>{movie.release_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}