import React/* , { useEffect, useState } */ from 'react';
/* 82911629aa763b7af65fbb5fa82c43e6 */

const Movies = ({ getMovies }) => {
  return (
    <div>
      {getMovies.map((movie) => (
        <div>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default Movies