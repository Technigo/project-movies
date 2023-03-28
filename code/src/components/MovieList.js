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
              <img className="details-img" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="movie-poster" />
              <div className="movie-details">
                <h2> {movie.title} </h2>
                <h3> {movie.release_date} </h3>
              </div>
            </Link>
          </div>
        )
      })}
    </section>
  )
}
// I switched the movie title on line 19 from a h1 to a h2 and the movie release date
// on line 20 from a p to a h3 for styling purposes

//* <p key={singlePokemon.name}>
// <Link to={`/details/${singlePokemon.name}`}>Go to {singlePokemon.name} details </Link> */}
// the key below can probably be switched to the id of the movies instead - when using that api */}
// </p> */}

export default MovieList;