/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  return (
    <section
      className="movies">
      {movieList.map((movie) => {
        return (
          <div className="movie-container">
            <Link
              key={movie.title}
              to={`/details/${movie.id}`}
              className="movie">
              <div className="image-overlay" />
              <img className="details-img" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />
              <div className="movie-details">
                <h1> {movie.title} </h1>
                <p> {movie.release_date} </p>
              </div>
            </Link>
          </div>
        )
      })}
    </section>
  )
}
//* <p key={singlePokemon.name}>
// <Link to={`/details/${singlePokemon.name}`}>Go to {singlePokemon.name} details </Link> */}
// the key below can probably be switched to the id of the movies instead - when using that api */}
// </p> */}

export default MovieList;