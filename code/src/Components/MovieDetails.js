import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls';

const MovieDetails = () => {

  const [movieDetails, setMovieDetails] = useState({});
  const {movieTitle} = useParams();

  useEffect(()=> {
    fetch(SINGLE_MOVIE_URL(movieTitle))
    .then(res => res.json())
    .then(data => setMovieDetails(data))
  }, []);

  return (
    <div>
      {movieDetails.original_title}
    </div>
  )
}

export default MovieDetails;