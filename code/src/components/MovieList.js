import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ list }) => {
  return (
    <section className="outer-wrapper">
      {list.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link
            to={`/details/${movie.id}`}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="movie_poster" />
            <div className="movie-info">
              <div className="movie-title">
                <h2> {movie.title} </h2>
                <h3>Released {movie.release_date} </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}

    </section>
  );
}

export default MovieList;

