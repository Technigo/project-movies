import React from 'react'
import { Link } from 'react-router-dom'

export const MovieListItems = ( {id, poster_path, title, release_date} ) => {
  return (
    <Link to={`/movies/${id}`} key={id} className='movie-wrapper'>
        <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt='{title}'/>
        <div className='movie-details'>
          <h1>{title}</h1>
          <p>Released {release_date}</p>
        </div>
    </Link>
  )
}