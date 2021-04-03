import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({ title, release_date, poster_path, id }) => {

    return (
      <>
          <Link to={`/movie/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} />
            <div className='details'>
                <h1>{title}</h1>
                <p>Released {release_date}</p>
            </div>
          </Link>
      </>
    )
}