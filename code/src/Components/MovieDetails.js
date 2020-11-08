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
    return 'Loading ...'
  }

  return (
    <section
      className="details-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w780${details.backdrop_path})`
      }}>
      <Link className="homepage-link" to="/">
        <svg className="back-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd" />
        </svg>
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