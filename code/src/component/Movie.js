import React from 'react'
import 'component/movie.css'

export const Movie = ({ id, original_title, poster_path }) => {
  return (
    <article>
      <h1>{original_title}</h1>
      <img className="movieImageSize" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title} />
    </article>
  )
}