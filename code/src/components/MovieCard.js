import React from 'react' 
import { Link } from 'react-router-dom'

import { URL_POSTER } from '../reusables/Urls'

const MovieCard = ({ list, poster_path, name, id, title, release_date }) => {
  return (
    <Link className="movie-wrapper" to={`/movies/${list}/${id}`}>
      <img className="movie-poster" src={URL_POSTER(poster_path)} alt={name} /> 
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-release-date">Released {release_date}</p>
      </div>
    </Link>
  )
}

export default MovieCard