import React from 'react'
import './moviecarddetails.css'

export const MovieCardDetails = ({ title, release_date }) => {
  return (
    <div className="movie-card-details">
      <h3 className="movie-card-title">{title}</h3>
      <p className="movie-card-release">Released {release_date}</p>
    </div>
  )
}