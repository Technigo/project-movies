import React from 'react'
import { Link } from 'react-router-dom'
import './MovieThumb.css'

export const MovieThumb = ({title, release_date, poster_path, id}) => {

  return(
    <Link to={`/movies/${id}`} className="movie-thumb-wrapper">
        <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
        <div className="movie-description">
          <h2>{title}</h2>
          <h3>Released {release_date}</h3>
        </div>
    </Link>
  )
}