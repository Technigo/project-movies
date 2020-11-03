import React from "react";

import "..//css/moviecard.css";

export const MovieCard = ({ name, moviedescription, rating, image }) => {
  return (
    <article className="movie-card">
      <h2 className="movie-title">{name}</h2>
      <div className="movie-image-wrapper">
        <img className="movie-image" src={image} alt={name} />
        <p className="image-description">{rating}</p>
      </div>
    </article>
  );
};
