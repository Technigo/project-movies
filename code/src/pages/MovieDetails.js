import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './moviedetails.css'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=df891c50a8dd83e3e3bb1b5bb74c3699&language=en-US`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setMovie(json)
      })
  }, [url, movieId])

  return (
    <section className="detail-page">
      <div className="background"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
        <Link className="backlink" to="/">
          <span role="img" aria-label="back-to-movies">◀️ </span>
          <span className="back-to-movies">Movies</span>
        </Link>
        <div className="movie-container">
          <img className="detail-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="description">
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average} / 10</p>
            <p className="overview">{movie.overview}</p>
            <Link to={`/${movie.id}/similar`}>More movies in this style...</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

