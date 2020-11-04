import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { NotFound } from './NotFound.js'

export const MovieDetails = () => {

  const { movieId } = useParams()
  // "movieId" must be the same variable name as in Route path in App.js, it gets the dynamic variable out of the URL

  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c07a4dcb1d91b54eb3b153e458e26489`

  const [movie, setMovie] = useState({})

  const getMovie = () => {
    fetch(MOVIE_URL)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
      })
  }

  useEffect(getMovie, [])

  return (
    <>
      {parseInt(movieId) === movie.id ? (
        <div className="movie-details">
          <img className="backdrop" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}></img>
          <div className="details-container">
            <div>
              <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            </div>
            <div className="movie-text">
              <h1>{movie.title}</h1>
              <h2>Release date: {movie.release_date}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div >
      ) : (
          <NotFound />
        )
      }
    </>
  )
}



//movie.vote_average, movie.homepage

