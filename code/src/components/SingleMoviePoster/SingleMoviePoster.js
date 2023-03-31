import React from 'react';
import './SingleMoviePoster.css';

export const SingleMoviePoster = ({ posterPath, altPoster }) => {
  return (
    <div className="moviePoster">
      <img src={posterPath} alt={altPoster} />
    </div>
  )
};
