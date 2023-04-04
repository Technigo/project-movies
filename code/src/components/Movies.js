/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ movieList }) => {
  console.log(movieList)
  return (
    <section>
      <h2 className="header-text"> UPCOMING MOVIES </h2>
      <div className="movies-wrapper">
        {movieList.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/moviedetails/${movie.id}`}>
              <div className="card-info">
                <h1 className="movietitle"> {movie.title} </h1>
                <p>Release date: {movie.release_date} </p>
              </div>
              <p className="release-date">{movie.release_date}</p>
              <img
                className="movieposter"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Movies;
