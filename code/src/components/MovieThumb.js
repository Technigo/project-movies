import React from 'react'
import {Link} from "react-router-dom"

export const MovieThumb = ({name, background_image, rating, released, id}) =>{
  return (
    <Link to={`/movies/${id}`}>
    <section className="movie-thumb">
      {name} - {released}
      <div className="movie-thumb-image-wrapper">
        <img className="movie-thumb-image" src={`https://image.tmdb.org/t/p/w342${background_image}`} alt={name}></img>
        <p className="movie-thumb-iamge-description">{rating}</p>
      </div>
    </section>
  </Link>
  );
}

/*`https://image.tmdb.org/t/p/w342${background_image}`*/