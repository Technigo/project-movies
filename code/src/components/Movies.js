import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Movies = (props) => {
  const { poster_path, id, title, vote_average } = props

  return (
    <>
      <NavLink to={`/movies/${id}`}><img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" /></NavLink>
      <NavLink to={`/movies/${id}`}><h2>{title}</h2></NavLink>
      <h3>{vote_average}/10 <FontAwesomeIcon icon={['far', 'star']} /></h3>
    </>
  )
}
