/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'

export const PopularList = ({ movies }) => {
  return (
    <section className="all-movies">
      {movies.map((movie) => {
        return (
          <div className="movie-container">
            <Link
              key={movie.id}
              to={`/showmovie/${movie.id}`}
              className="movie">
              <div className="img-overlay" />
              <img className="all-movie-posters" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />
              <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>Release date: {movie.release_date}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </section>
  )
};
