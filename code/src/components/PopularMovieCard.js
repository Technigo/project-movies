import React from 'react';
import { Link } from 'react-router-dom';


export const PopularMovieCard = ({id, poster_path, title  ,release_date}) => {
    
return (
  <>
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <div className="overlay-container">
          <img className="movie-card-image" 
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`} 
            alt={`${`original_title`}poster`} />
          <div className="text-overlay">
            <h1>{title}</h1>
            <p> Released {release_date}</p>
          </div> 
        </div> 
      </Link>
    </div> 
  </>
)};