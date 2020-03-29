import React from 'react'
import { NavLink } from 'react-router-dom'

export const Movies = (props) => {
  const { poster_path, id, title, vote_average, index } = props

  return (
    <>
      <NavLink to={`/movies/${id}`}>
        <article key={index}>
          <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
          <div className="movie-title-container">
            <h2>{title}</h2>
            <h3>{vote_average}/10 </h3>
          </div>
        </article>
      </NavLink>
    </>
  )
}
