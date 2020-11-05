import React from "react";
import { Link } from 'react-router-dom';

export const MovieThumb = ({name, background_image, voted, key}) => {
  return (
  <Link to={`/movie/${key}`}>
   <section className="movie-thumb">
     <h1 className="movie-name">{name}</h1> 
      <div className="movie-thumb-image_wrapper">
    <img className="movie-thumb-image" src={`http://image.tmdb.org/t/p/w300/${background_image}`} alt={name}/>
<p className="movie-thumb-image-voted">{voted} ⭐️ </p>
      </div>

      </section>
      </Link>
);
};





// https://image.tmdb.org/t/p/w1280${movie.backdrop_path}