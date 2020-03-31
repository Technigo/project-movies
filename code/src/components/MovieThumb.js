import React from 'react'
import { Link } from 'react-router-dom'

export const MovieThumb = ({ title, release_date, poster_path, id }) => {
  
  return (
    
    <Link to={`/movies/${id}`}>
      <section className="movie-thumb">
        <p>{title}</p>
        <div className="movie-thumb-image-wrapper">
          <img className="movie-thumb-image"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title} />
          <p className="movie-thumbnail-image-description">{release_date}</p>
          
        </div>
      </section>
    </Link>

  )

}