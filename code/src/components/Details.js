import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MOVIEDETAILS } from 'Urls.js/url'
import Back from 'components/Back'

const Details = () => {
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false)
  const { movie_id } = useParams()


  useEffect(() => {
    setLoading(true)
    fetch(MOVIEDETAILS(movie_id))
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .finally(() => setLoading(false))
  }, [movie_id])

  if (loading) {
    return (<h1>Loading data...</h1>)
}

  return (
    <section className="details-page">
      <Link to="/" className="back-link">
        <Back />
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
