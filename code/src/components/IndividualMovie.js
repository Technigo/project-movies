import React, { useState, useEffect } from 'react';
import { API_KEY } from 'urls/urls';
import { Link } from 'react-router-dom';

const IndividualMovie = () => {
  const [movies, setMovies] = useState('')
  const [error, setError] = useState('')
  const MOVIE_URL = `https://api.themoviedb.org/3/individualmovie/?${movies}api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.data())
      .then((data) => {
        if (data.id) {
          setMovies(data)
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
      <Link to="/">Movies</Link>
      <div className="movie-card">This is an individual movie card</div>
    </div>
  )
}

export default IndividualMovie;
