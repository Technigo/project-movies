
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
    <div>
      <h1>{details.title}</h1>
      <img className="poster-image" src={details ? `https://image.tmdb.org/t/p/w342${details.poster_path}` : ''} alt={details.title} />
      <button type="button" onClick={goBack}>Go back</button>
    </div>
  )
}

export default MovieDetails