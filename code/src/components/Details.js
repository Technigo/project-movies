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
    <div className="background">
      <img className="background-img" src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.original_title} />
      <button className="backButton" type="button" onClick={onGoBackButtonClick}>
        Back to movies
      </button>
      <div className="details-container">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movie-text">
          <h2>{movie.title}</h2>
          <p><strong>Release date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> ⭐ {Math.round(movie.vote_average * 10) / 10}</p>
          <p><strong>About:</strong> {movie.overview}</p>
          <p><strong>Budget:</strong> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)}</p>
        </div>
      </div>
    </div>
  )
}