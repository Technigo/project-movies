/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MOVIEDETAILS_URL } from 'short/Urls.js';
import Back from './icons/Back.png';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movie_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(MOVIEDETAILS_URL(movie_id))
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="details-container">
        <img
          className="backdrop-image"
          src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
          alt={movieDetails} />
      <div className="gradient" />

      <div className="detail-wrapper">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
          alt={movieDetails} />
        <div className="text-wrapper">
          <h2>
            <span className="title">{movieDetails.title}</span>
            <span className="rating">⭐️ {movieDetails.vote_average}</span>
          </h2>
          <h3>{movieDetails.tagline}</h3>
          <p className="over-view">{movieDetails.overview}</p>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="back-button" onClick={goBack}>
        <img
          className="button-icon"
          src={Back}
          alt="button that goes back shaped as popcorn" />
        </button>
      </div>
    </section>
  );
};

export default MovieDetails;
// movie_id as param, Eslint disablet because of underscore and movieid not being in camelcase
// To add the movie score add {movieDetails.vote_average}
// ${movieDetails.poster_path} or BACKDROP PATH to add to the poster URL! WIDTH is specified in link
// {movieDetails.tagline} Adds a tagline "there has always been something wrong with esther"

// add genre would be fun? Ex a button/tag with "HORROR, THRILLER etc" ??
