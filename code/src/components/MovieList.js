import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ list }) => {
  return (
    <div>
      {list.map((movie) => {
        return (
          <section key={movie.id}>
            <Link to={`/movieDetails/${movie.id}`}>
              <h2 key={movie.title}>{movie.title}</h2>
              <p key={movie.release_date}>{movie.release_date}</p>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
            </Link>
          </section>
        )
      })}
    </div>
  );
}
export default MovieList;