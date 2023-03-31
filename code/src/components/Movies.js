/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ movieList }) => {
  console.log(movieList)
  return (
    <section>
      {movieList.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/moviedetails/${movie.id}`}>
            <div className="card-info">
              <h1 className="movietitle"> {movie.title} </h1>
              <p className="release-date"> {movie.release_date} </p>
            </div>
            <img
              className="movieposter"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title} />
          </Link>
        )
      })}
    </section>
  )
}

export default Movies;
