import React from "react";
// import { Link } from 'react-router-dom';

export const MovieThumb = ({name, background_image}) => {
  return ( <section className="movie-thumb">
      {name}
      <div className="movie-thumb-image_wrapper">
    <img className="movie-thumb-image" src={`http://image.tmdb.org/t/p/w300/${background_image}`} alt={name}/>
<p className="movie-thumb-image-description">4.5</p>
      </div>

      </section>
);
};


// https://image.tmdb.org/t/p/w1280${movie.backdrop_path}