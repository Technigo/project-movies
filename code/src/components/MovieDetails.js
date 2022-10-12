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
            src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
            alt={movieDetails} />
          <h2>{movieDetails.title}</h2>
          <h3>{movieDetails.tagline}</h3>
          <p className="over-view">{movieDetails.overview}</p>
        </div>
        <div className="button-container">
        <button type="button" onClick={goBack}> Go back </button>
      </div>
      </section>
     
    </>
  );
};

export default MovieDetails;
// movie_id as param, Eslint disablet because of underscore and movieid not being in camelcase
// To add the movie score add {movieDetails.vote_average}
// ${movieDetails.poster_path} or BACKDROP PATH to add to the poster URL! WIDTH is specified in link
// {movieDetails.tagline} Adds a tagline "there has always been something wrong with esther"

// add genre would be fun? Ex a button/tag with "HORROR, THRILLER etc" ??

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
