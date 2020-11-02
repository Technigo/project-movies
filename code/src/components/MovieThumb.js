import React from 'react';
import { Link } from 'react-router-dom';

export const MovieThumb = ({ 
  title, 
  release_date, 
  poster_path, 
  id,
}) => {
  return (
    <Link key={id} to={`/movies/${id}`}> 
      <div className="details">
        <h1 className="movie-title">{title}</h1>
        <p className="movie-release">Released: {release_date}</p>
        <img 
          src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
          alt={title} 
          className="poster-image"
        />
      </div>
    </Link>
  );
};


         
       