import React from 'react'
import { Link } from 'react-router-dom'
import Loader from 'components/Loader'
import moment from 'moment'

const MovieList = ({ movieList, loading }) => {
  console.log(movieList)

  if (loading) return <Loader />

  return (
    <article className="poster-container">
      {movieList.map((movie) => {
        return (
          <Link className="movie" key={movie.id} to={`/moviedetails/${movie.id}`}>
            <img className="poster-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={`${movie.title} poster`} />
            <div className="poster-text-container">
              <h1 className="poster-text-container-title">{movie.title}</h1>
              <p>Release date: {moment(movie.release_date).format('D MMMM YYYY')}</p>
            </div>
          </Link>
        )
      })}
    </article>
  )
}

export default MovieList