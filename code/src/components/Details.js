/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
//   const params = useParams();
  const { movieTitle } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieTitle}?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a&language=en-US`)
      .then((response) => response.json())
      .then((data) => movieTitle(data));
  });

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(params.pokemonName);
    console.log(movieTitle);
  });
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <p>I am the Deatails component</p>
      <button type="button" onClick={goBack}> Go back </button>
    </div>
  );
}

export default Details;

// url for movie-details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
// https://api.themoviedb.org/3/movie/550?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a