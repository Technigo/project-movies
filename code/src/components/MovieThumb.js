import React from "react";
// import { Link } from 'react-router-dom';

export const MovieThumb = ({name}) => {
  return ( <section className="movie-thumb">
      {name}
      <div className="movie-thumb-image_wrapper">
    <img className="movie-thumb-image" src="./" alt={name}/>
<p className="movie-thumb-image-description">4.5</p>
      </div>

      </section>
);
};


