import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { SINGLE_MOVIE_URL } from '../data/urls';

export const MovieDetails = () => {
  const [setMovies] = useState()
  // const [movies, setMovies] = useState()
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(movieId))
      .then((res) => res.json())
      .then((json) => {
        setMovies(json)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId])

  const PreviousPage = () => {
    navigate(-1);
  }

  return (
    <div>
      <p>this is MovieDetails</p>
      <button type="button" onClick={PreviousPage}> Go Back </button>
    </div>
  );
}