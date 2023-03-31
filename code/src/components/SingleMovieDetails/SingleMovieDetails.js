import React from 'react';
import './SingleMovieDetails.css'

export const SingleMovieDetails = ({ title, overview, voteAverage }) => {
  const roundAverage = Math.round(voteAverage * 10) / 10;

  return (
    <div className="movie-details">
      <div className="movie-details-box">
        <div className="movieDetHeading">
          <h1>{title}</h1>
          <h2>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons8-star-filled-50.png`}
              alt="star-icon"
              className="star-icon" />
            {roundAverage}
          </h2>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  )
};