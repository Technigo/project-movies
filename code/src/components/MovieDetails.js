
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MOVIE_DETAILS_URL } from 'utils/urls'
import Loader from './Loader'
import NotFound from './NotFound'

const MovieDetails = () => {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log(movieId)
    fetch(MOVIE_DETAILS_URL(movieId))
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.id) {
          setDetails(data)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [movieId])

  const goBack = () => {
    navigate('/')
  }

  if (loading) return <Loader />

  if (error) return <NotFound />

  return (
    <article
      className="details-container"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original${details.backdrop_path})`
      }}>
      <div className="details-summary">
        <button type="button" onClick={goBack} className="link-back">
          <span className="link-back-icon">⏪</span>
          <span className="link-back-text">Movies</span>
        </button>
        <img className="details-summary-poster" src={details ? `https://image.tmdb.org/t/p/w342${details.poster_path}` : ''} alt={details.title} />
        <div className="details-summary-text">
          <h1 className="details-summary-text-header">
            <span className="details-summary-text-header-title">{details.title} </span>
            <span className="details-summary-text-header-rating">⭐️ {details.vote_average.toFixed(1)}</span>
          </h1>
          <p className="details-summary-text-description">{details.overview}</p>
        </div>
      </div>
    </article>
  )
}

export default MovieDetails