/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from './image/back-button.png'

export const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f11ed04ddfe383ddef42be786607cc39&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => { console.error(e) })
  }, [movieId])

  const onBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="details-section-wrapper">
      <img className="background-image" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
      <div className="details-wrapper">
        <button type="button" className="back-button" onClick={onBackButtonClick}>
          <img className="back-button-image" alt="go back" src={Button} />
        </button>
        <div className="movie-details">
          <img className="movie-details-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-details-text">
            <div className="movie-details-box">
              <h2 className="movie-title">{movie.title}</h2>
              <h3 className="rating">⭐️ {movie.vote_average}/10</h3>
              <p className="movie-details-summary">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}