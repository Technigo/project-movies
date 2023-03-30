import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TvSeries = ({ originalName, singleTvPoster, singleTvID }) => {
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
          <img src={`https://image.tmdb.org/t/p/w300${singleTv.poster_path}`} alt="TVseries" />
          <div className={isHover ? 'description' : 'hidden-description'}>
        </Link>
        <p>First aired{singleTv.first_air_date}</p>
          </div>
    </div> 
    };