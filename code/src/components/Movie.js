import React from 'react'
import './movie.css'

export const Movie = (props) => {
  return (
    <article className="movie" style={{ background: `linear-gradient(0deg, rgba(0,0,0,0.9) 2%, rgba(255,255,255,0) 30%), url(https://image.tmdb.org/t/p/w1280${props.backdrop}) top left/ cover no-repeat fixed` }}>
      {props.children}
      <img src={`https://image.tmdb.org/t/p/w342${props.poster}`} alt={props.title} className="movie-poster" />
      <div className="movie-details">
        <h1 className="movie-title">
          {props.title}
          <span className="movie-rating">{props.rating}/10</span>
        </h1>
        <p className="movie-synopsis">{props.overview}</p>
      </div>
    </article>
  )
}