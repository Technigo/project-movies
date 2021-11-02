import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MOVIEDETAILS_URL } from '../utils/urls';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(MOVIEDETAILS_URL(id))
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, []);

  console.log(movieDetails);

  return (
    <div>
      <h2>Movie Details component</h2>
      <h3>{movieDetails.original_title}</h3>
      <h4>{movieDetails.vote_average}/10</h4>
      <p>{movieDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
    </div>
  );
};

export default MovieDetails;
