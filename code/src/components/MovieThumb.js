import React from 'react'
import './MovieThumb.css'

export const MovieThumb = ({title, release_date, poster_path}) => {
  return(
    <article className="movie-thumb">
      <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
      <div className="movie-details">
        <h2>{title}</h2>
        <h3>Released {release_date}</h3>
      </div>
    </article>
  )
}