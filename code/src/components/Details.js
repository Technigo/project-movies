import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MOVIEDETAILS } from 'Urls.js/url'
import Backicon from 'components/Backicon'

const Details = () => {
  const [details, setDetails] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { movie_id } = useParams()

  useEffect(() => {
    fetch(MOVIEDETAILS(movie_id))
      .then((res) => res.json())
      .then((data) => {

        if (data) {
          setDetails(data) 
        } else {
          setHasError(true)
        }
      })
      .catch(() => setHasError(true))
  }, [movie_id])

  if (hasError) {
    return (
      <section>
        <h2 className="error">Movie was not found</h2>
        <Link to="/" className="back-link">
          <Backicon /> Movies
        </Link>
      </section>
    )
  }

  if (details === null) {
    return <p></p>
  }
  return (
    <section className="details-page">
      <Link to="/" className="back-link">
        <Backicon />
        Movies
      </Link>
      <img
        className="background-img"
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} 
        alt={details.title}
      />

      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w185${details.poster_path}`}
          alt={details.title}
        />
        <h2>{details.title}</h2>
        <span className="vote">{details.vote_average}/10</span>
        <p>{details.overview}</p>
      </div>
    </section>
  )
}

export default Details
