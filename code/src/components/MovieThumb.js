import React from 'react'
import {Link} from "react-router-dom"

export const MovieThumb = ({name, poster_image, released, id}) =>{
  
  return (
    <Link to={`/movies/${id}`}>
    <section className="movie-thumb-container">
      <div className="movie-thumb-image-wrapper">
        <img className="movie-thumb-image" src={`https://image.tmdb.org/t/p/w500${poster_image}`} alt={name}></img>
        <div className="text-container">
          <h1 className="movie-title">{name}</h1> 
          <p className="movie-released">Released {released}</p>
        </div>
      </div>
    </section>
    </Link>
  );
}
