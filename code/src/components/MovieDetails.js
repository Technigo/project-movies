import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from 'components/LeftArrow'
import './moviedetails.css'

export const MovieDetails = ({ backdropUrl, posterUrl, title, vote_average, overview, tagline, production_companies }) => {
  return (
    <div className="movie-backdrop" style={{ backgroundImage: `url(${backdropUrl})` }}>
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
            <p>{tagline}</p>
            <h3>Production companies</h3>
            {production_companies.map((company) => (
              <p key={company.name}>{company.name}</p>
            )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}