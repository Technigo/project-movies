import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from 'components/LeftArrow'
import './moviedetails.css'

//Component returning details of a specific movie, using props to decide what info to include from GET request
//Link with the LeftArrow component redirecting the user to the homepage
//Includes a map function to map over production_companies from GET request to list companies, using Link to link to CompanyPage
export const MovieDetails = ({ backdropUrl, posterUrl, title, vote_average, overview, production_companies }) => {
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

            <h2 className="movie-title">{title} <span className="movie-rating">{vote_average}/10</span></h2>
            <p className="movie-overview">{overview}</p>

            <h3 className="production-companies-title">Production companies:</h3>
            <ul className="production-companies">

              {/* Mapping over  */}
              {production_companies.map((company) => (
                <Link key={company.id} to={`/companies/${company.id}`}>
                  <li className="company" key={company.name}>{company.name}</li>
                </Link>
              ))}

            </ul>

          </div>

        </div>

      </section>
    </div>
  )
}