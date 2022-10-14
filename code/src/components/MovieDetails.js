
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { MOVIE_DETAILS_URL } from 'utils/urls'
import Loader from './Loader'

const MovieDetails = () => {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log(movieId)
    fetch(MOVIE_DETAILS_URL(movieId))
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch(((error) => console.error(error)))
      .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBack = () => {
    navigate(-1)
  }

  if (loading) return <Loader />

  return (
    <article
      className="details-container"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original${details.backdrop_path})`
      }}>
      <div className="details-summary">
        <Link to={goBack} className="button-back"> Movies </Link>
        <img className="details-summary-poster" src={details ? `https://image.tmdb.org/t/p/w342${details.poster_path}` : ''} alt={details.title} />
        <div className="details-summary-text">
          <h1 className="details-summary-text-header">
            <span className="details-summary-text-header-title">{details.title}</span>
            <span clasName="details-summary-text-header-rating">⭐️ Rating</span>
          </h1>
          <p className="details-summary-text-wrapper-description">{details.overview}</p>
        </div>
      </div>
    </article>
  )
}

export default MovieDetails

// @TODO add icon and animation to button and fix styling