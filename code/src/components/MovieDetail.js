/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f11ed04ddfe383ddef42be786607cc39&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.results);
      })
      .catch((e) => { console.error(e) })
  }, [movieId])

  const onBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <div>
      <img className="background-image" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
      <div className="details-wrapper">
        <button type="button" className="back-button" onClick={onBackButtonClick}>Go back</button>
        <div className="movie-details">
          <img className="movie-details-poster" src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
          <div className="movie-details-text">
            <h2 clasname="movie-title">{movie.title}</h2>
            <h3 className="rating">⭐️ {movie.vote_average}/10</h3>
            <p className="movie-details-summary">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}