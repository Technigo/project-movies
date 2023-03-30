import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const navigate = useNavigate()
  const { movieId } = useParams()

  const onBackButtonClick = () => {
    navigate(-1)
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data)
      });
  }, [movieId]);

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back!</button>
      <h2>{details.original_title}</h2>
      <img src={details.backdrop_path ? `https://image.tmdb.org/t/p/w1280${details.backdrop_path}` : ''} alt="poster" />
    </div>
  )
}
