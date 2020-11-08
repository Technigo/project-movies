import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './movie-details.css'

export const MovieDetails = () => {
  const { movieId } = useParams()

  const [details, setDetails] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=078bf3a954eadf3e9528b49c2a6a9682&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
  }, [movieId])

  if (!details) {
    return null
  }

  return (
    <section
      className="details-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w780${details.backdrop_path})`
      }}>
      <Link className="homepage-link" to="/">
        <img className="back-button" src="/back-button.svg" alt="Back Button" />
        <p>
          Movies
        </p>
      </Link>
      <div className="movie-wrapper">
        <img className="poster-image" src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt="Poster" />
        <div className="movie-details">
          <h1 className="movie-title">{details.title}<span className="rating">{details.vote_average}/10</span></h1>
          <p className="movie-overview">{details.overview}</p>
        </div>
      </div>
    </section>
  )
}