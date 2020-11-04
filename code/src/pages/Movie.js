import React from "react";

import { IMAGE_URL } from "../components/URLS";

import "../styles/movie.css";

/* This component should be reusable no matter what typ of movie you'd like to display
Should this component be the link? */
export const Movie = ({ title, poster_path, release, id }) => {

  /* Where should I do this fetch? */
  const API__KEY='daf1a56c904ca6e2943af1246db74e3f'
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API__KEY}&language=en-US`
  

  fetch(DETAILS_URL)
  .then(res => res.json())
  .then(data => {
      console.log(data)
  })

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
