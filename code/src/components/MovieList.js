import React from 'react'
import { Link } from 'react-router-dom'
import { POSTER_URL } from 'utils/url'
import 'components/movieList.css'

export const MovieList = ({ movies }) => {
  return (
    <section className='movie-container'>
      {movies.map(movie => (
        <Link className='movie-link' to={`/details/${movie.id}`} key={movie.id}>
          <img className='movie-poster' src={POSTER_URL(movie.poster_path)} alt={movie.title} />
          <div className='overlay'>
            <h1 className='hover-text'>{movie.title}</h1>
            <p className='hover-text'>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}
