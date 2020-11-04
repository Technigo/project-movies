import React from "react";

import { IMAGE_URL } from "./URLS";

import "../styles/movie.css";

/* This component should be reusable no matter what typ of movie you'd like to display
Should this component be the link? */
export const Movie = ({ title, poster_path, release }) => {
  return (
    <section className="movie__card">
      <div className="movie__overlay">
        <div className='movie__info-text'>
        <h2 className="movie__heading">{title}</h2>
        <p className="movie__released">Released {release}</p>
        </div>
      </div>
      <img src={`${IMAGE_URL}${poster_path}`} alt={title} />
    </section>
  );
};
