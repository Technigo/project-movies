import React from 'react'

import './MovieCard.css'

import { useParams, Link } from 'react-router-dom'

export const MovieCard = ({title, release_date, poster_path, id}) => {
  return (
    <>
    <Link className="movie-card-wrapper" to={`/movies/${id}`}>
    <div>
      <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} />
      <div className="movie-card-text">
      <h2>
        {title}
      </h2>
      <h3>
        {`Released ${release_date}`} 
        </h3>
      </div>
    </div>
    </Link>
    </>
  )
}

