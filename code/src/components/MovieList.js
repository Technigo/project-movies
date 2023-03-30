/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'

export const MovieList = ({ movies }) => {
  return (
    <section className="movie-list">
      {movies.map((movie) => {
        return (
          <article className="list-item-wrapper">
            <Link
              key={movie.id}
              to={`./MovieDetails/${movie.id}`}>
              <img
                className="list-item-poster"
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title} />
              <div className="list-item-info">
                <h2>{movie.title}</h2>
                <h3>Released {movie.release_date}</h3>
              </div>
            </Link>
          </article>
        )
      })}
    </section>
  )
}