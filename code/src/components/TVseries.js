import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const tvSeries = ({ tvDetails }) => {
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

      <Link to={`/tv/popular/${tvDetails}`}>
        <div className={isHover ? 'description' : 'hidden-description'}>
          <h1>{tvSeries.name}</h1>
        </div>
      </Link>
    </div>
  )
}