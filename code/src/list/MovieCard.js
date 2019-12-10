import React from 'react'
import './movieCard.css'

export const MovieCard = (props) => {
  return (
    <article className="movie" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${props.poster})` }} >
      <h2 className="movie-title">{props.title}</h2>
      <p className="movie-release-date">Release date: {props.date}</p>
    </article>
  )
}