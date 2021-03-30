import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MOVIE_URL } from '../reusables/urls'

const MovieInfo = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(MOVIE_URL(id))
      .then(response => response.json())
      .then(receivedMovie => setMovie(receivedMovie))
  }, [id])
  console.log(movie)
  return (
    <div
      className="info-container"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%), url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})` }}
    >
      <div className="summary">
        <img className="info-poster" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
        <div className="details">
          <h1 className="info-title">{movie.title}</h1>
          <p className="info-rating">{movie.vote_average}/10</p>
          <p className="info-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
export default MovieInfo

 