import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DETAILS_URL } from '../utils/urls';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=09aada9217228b8c02f9df4d4fee66c8&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  });

  return <div>Movie details{movieId}</div>;
};

export default MovieDetails;
