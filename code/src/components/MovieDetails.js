/*eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MOVIEDETAILS_URL } from 'short/Urls.js';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movie_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(MOVIEDETAILS_URL(movie_id))
      .then((res) => res.json())
      .then((data) => {setMovieDetails(data);});
  }, []);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <section className="details-container">
        <img
          className="backdrop-image"
          src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
          alt={movieDetails} />
        <div>
          <img
            className="poster-image"
            src={`https://image.tmdb.org/t/p/w780${movieDetails.poster_path}`}
            alt={movieDetails} />
          <h1>{movieDetails.title}</h1>
          <h2>{movieDetails.tagline}</h2>
          <p className="over-view">{movieDetails.overview}</p>
        </div>
      </section>
      <div className="button-container">
        <button type="button" onClick={goBack}> Go back </button>
      </div>
    </>
  );
};

export default MovieDetails;
/*
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

export const MovieDetails = () => {
  const params = useParams();
  const { pokemonName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(params.pokemonName)
    console.log(pokemonName)
  });

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <p>I am detail component</p>
      <button type="button" onClick={goBack}> Go back </button>
    </div>
  );
}
export default MovieDetails;
*/
