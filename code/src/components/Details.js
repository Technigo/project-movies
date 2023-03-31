import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DETAILS_URL } from 'utils/urls';

export const Details = () => {
  const [movie, setMovie] = useState([])
  const { movieId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [movieId])
  console.log(movie)
  const onGoBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="details-container">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {Math.round(movie.vote_average * 10) / 10}</p>
      <p>{movie.overview}</p>
      <p>Budget: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)}</p>
      <button type="button" onClick={onGoBackButtonClick}>Go back
      </button>
    </div>
  )
}

//add fetch of backdrop img
