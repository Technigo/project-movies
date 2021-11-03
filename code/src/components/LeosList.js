import React from 'react';
import { Link } from 'react-router-dom';

const LeosList = ({ movies }) => {
  return (
    <section className="all-movies">
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <div className="movie-overlay">
              <img
                className="movie-thumbnail"
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt="{movie.title}"
              />
              <div className="movie-thumbnail-text">
                <h1>{movie.title}</h1>
                <p>Released {movies.release_date}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default LeosList;
