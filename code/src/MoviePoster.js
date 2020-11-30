import React from 'react'
import { Link } from 'react-router-dom'

import "./css/MoviePoster.css"


export const MoviePoster = ({ id, title, release_date, poster_path }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342'

  return (
    <section className='movie-poster'>
      <Link to={`/movies/${id}`}>
        <img src={`${IMAGE_BASE_URL + poster_path}`} alt={title}></img>
        <div className="poster-details">
          <h2>{title}</h2>
          <p>Released {release_date}</p>
        </div>
      </Link>
    </section>

  )
}