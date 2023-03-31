import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TVSeries = ({ singleTvAirDate, singleTvID, originalName, poster }) => {
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

      <Link to={`/TVseries/${singleTvID}`}>
        <img src={`https://image.tmdb.org/t/p/w342${poster}`} alt="TVseries" />
        <div className={isHover ? 'description' : 'hidden-description'}>
          <h1>{originalName}</h1>
          <p>First aired {singleTvAirDate.first_air_date}</p>
        </div>
      </Link>
    </div>
  )
}