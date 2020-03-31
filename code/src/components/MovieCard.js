import React from 'react'
import { Link } from 'react-router-dom'
import './moviecard.css'

//Component with content of each movie card listed on MovieList page
//Link used so that clicking anywhere on the card will redirect the user to the MoviePage
export const MovieCard = ({ id, poster_path, title, release_date }) => {
  const posterSrc = `https://image.tmdb.org/t/p/w342${poster_path}`

  return (
    <Link to={`/movies/${id}`}>
      <article className="movie-card">
        <img className="movie-poster" src={posterSrc} alt={title} />
        <div className="movie-card-details">
          <h3 className="movie-card-title">{title}</h3>
          <p className="movie-card-release">Released {release_date}</p>
        </div>
      </article>
    </Link>
  )
}