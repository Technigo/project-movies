import React from 'react';
import {Link} from 'react-router-dom';
export const MovieCard = ({title, poster_path, release_date, id}) => {
  return(   
      <Link to={`/movies/${id}`} className="movie-poster-wrapper">       
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
        <div className="movie-info">
          <h2 className="movie-title">{title}</h2>
          <p className="movie-released">Released: {release_date}</p>
        </div> 
      </Link>     
      
  )
}