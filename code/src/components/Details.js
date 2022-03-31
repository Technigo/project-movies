import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MOVIEDETAILS } from 'Urls.js/url'
import Backicon from 'components/Backicon'

const Details = () => {
  const [details, setDetails] = useState(null)
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { movie_id } = useParams()

  useEffect(() => {
    setLoading(true)
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
      .finally(() => setLoading(false))
  }, [movie_id])

  

  if (details === null) {
    return <p></p>
  }

  if (loading) {
    return <h1>Loading movie...</h1>
  }

  if (hasError) {
    return (
      <section className="error-container">
        <h2 className="error">Sorry, this movie was not found</h2>
        <Link to="/" className="back-link">
          <Backicon /> Movies
        </Link>
      </section>
    )
  } 
  
    return (
      <section className="details-page">
        <Link to="/" className="back-link">
          <Backicon />
          <span className="movie-icon">Movies</span>
        </Link>
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
          }}
        >
          <div className="movie-details">
            <img
              src={`https://image.tmdb.org/t/p/w185${details.poster_path}`}
              alt={details.title}
            />
            <div className="info-details">
              <h2>{details.title}</h2>
              <h3>{details.vote_average}/10 IMDB</h3>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      </section>
    )
  
}

export default Details
