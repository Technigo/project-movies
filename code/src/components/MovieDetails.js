import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from 'components/LeftArrow'
import './moviedetails.css'

export const MovieDetails = ({ backdropUrl, posterUrl, title, vote_average, overview }) => {
  return (
    <div className="movie-backdrop" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0) 20%, rgba(0, 0, 0) 100%), url(${backdropUrl})` }}>
      <section className="movie-detail-wrapper" >
        <Link to="/" className="back-link">
          <LeftArrow />
          <span className="back-link-text">Movies</span>
        </Link>
        <div className="movie-detail-container">
          <img className="movie-detail-poster" src={posterUrl} alt={title} />
          <div className="movie-summary">
            <h1 className="movie-title">{title} <span className="movie-rating">{vote_average}/10</span></h1>
            <p className="movie-overview">{overview}</p>
          </div>
        </div>
      </section>
    </div>
  )
}