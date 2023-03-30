import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  console.log(movies)
  return (
    <section className="listContainer">
      {movies.map((movie) => {
        const posterPath = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className="list-element">
            <img src={posterPath} alt={movie.id} />
            <div className="details">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        )
      })}
    </section>
  );
}

export default MovieList