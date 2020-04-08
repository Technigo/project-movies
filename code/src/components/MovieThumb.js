import React, { useState } from 'react';
import './MovieThumb.css';
import { Link } from 'react-router-dom';

export const MovieThumb = ({ id, title, poster_path, release_date}) => {
  const [showHover, setShowHover] = useState(false)

  return (
    <Link to={`/movies/${id}`}
      onMouseOver={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={title}
      />
      {showHover &&
        <div className='movies-list-info'>
          <h1>{title}</h1>
          <p>Released {release_date}</p>
        </div>
      }
    </Link>
  );
}