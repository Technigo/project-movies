import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ list }) => {
  return (
    <div className="top-rated-list">
      {list.map((movie) => {
        return (
          <section className="movie-card" key={movie.id}>
            <Link
              to={`/movieDetails/${movie.id}`}>
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt="movie poster" />
              <div className="overlay">
                <h1 className="text" key={movie.title}>{movie.title}</h1>
                <p className="text" key={movie.release_date}>Released: {movie.release_date}</p>
              </div>
            </Link>
          </section>
        )
      })}
    </div>
  );
}
export default MovieList;