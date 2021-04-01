import React from 'react'

import './MovieCard.css'

export const MovieCard = ({ title, releaseData, posterPath }) => {
  return (
    <>
      <img className="card-image" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="" />
      <div className="title-date">
        <h1>{title}</h1>
        <p>Released {releaseData}</p>
      </div>
    </>
  )
}