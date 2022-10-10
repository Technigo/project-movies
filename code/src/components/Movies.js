import React/* , { useEffect, useState } */ from 'react';
import { Link } from 'react-router-dom'
/* 82911629aa763b7af65fbb5fa82c43e6 */

const Movies = ({ getMovies }) => {
  return (
    <div>
      {getMovies.map((movie) => (
        <div>
          <Link key={movie.id} to={`/detail/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default Movies