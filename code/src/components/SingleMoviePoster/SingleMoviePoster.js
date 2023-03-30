import React from 'react';

export const SingleMoviePoster = ({ posterPath, altPoster }) => {
  return (
    <div>
      <img src={posterPath} alt={altPoster} />
      <p>Test</p>
    </div>
  )
};
