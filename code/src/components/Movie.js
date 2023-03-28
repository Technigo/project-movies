import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ title, releaseDate, movieID, poster }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      <Link
        to={`/movies/${movieID}`}>
        <img src={`http://image.tmdb.org/t/p/w342${poster}`} alt="movie" />
        <div className={isHover ? 'description' : 'hidden-description'}>
          <h1>{title}</h1>
          <p>Released {releaseDate}</p>
        </div>
      </Link>
    </div>
  )
}