/* eslint-disable camelcase */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { API_KEY } from 'urls/urls';
import { Link, useParams } from 'react-router-dom';

const IndividualMovie = () => {
  const [movie, setMovie] = useState('')
  const [error, setError] = useState('')
  const { movie_id } = useParams()
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/?${movie_id}api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setMovie(data)
        } else {
          setError(true)
        }
      })
  }, [MOVIE_URL])

  if (error) {
    return (
      <Link to="/" className="btn-back">
        <span className="btn-text">Back Home!</span>
      </Link>
    )
  }

  return (
    <div>
      <Link to="/" className="btn-back">
        <span className="btn-text">Back Home!</span>
      </Link>
      <div className="movie-details">
        <img
          className="movie-poster"
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : ''}
          alt={movie.title} />
        <div className="movie-summary">
          <h1>{movie.title}<span className="movie-rating">{movie.vote_average} / 10</span></h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default IndividualMovie;
