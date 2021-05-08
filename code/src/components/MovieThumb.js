import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const MovieThumb = ({ title, release_date, poster_path, id }) => {
  return (
    <Link to={`/movies/${id}`} className="movie-card">
      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <div className="title-release-container">
        <p className="movie-title">{title}</p>
        <p className="movie-release">Released: {moment(release_date).format('MMMM D, YYYY')}</p>
      </div>
    </Link>

  )
}
export default MovieThumb