import React from 'react';

export const SingleMovieDetails = ({ title, overview, voteAverage }) => {
  // Probably needs to receive some props from the SingleMovie fetching
  return (
    <>
      <p>{title}</p>
      <p>{overview}</p>
      <p>{voteAverage}</p>
    </>
  )
};