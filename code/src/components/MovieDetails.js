import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { SINGLE_MOVIE_URL } from './data';

export const MovieDetails = () => {
  const [movies, setMovies] = useState()
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(id))
      .then((res) => res.json())
      .then((json) => {
        setMovies(json)
      })
  }, [id])

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