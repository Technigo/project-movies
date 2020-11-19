import React from 'react';
import { Link } from 'react-router-dom';

export const MovieThumbSimilar = ({ title, poster_path, id, }) => {

  return (
    <Link to={`/movies/${id}`}> 
       <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
        alt={title} 
        className="similar-movie-poster-image"
      />
    </Link>
  );
};


         
       