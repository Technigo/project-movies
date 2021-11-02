import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from '../utils/urls'
import { Background } from 'components/Background'
import "./MovieDetails.css"

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
  }, [movieId])

  return (
    <>
      <div>
        <Background
          backgroundUrl = {`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        >
          <button>Return to Movielist</button>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title} />
            <div className="detail">
              <h1>{movieDetails.title} <span className="rating">{movieDetails.vote_average}/10</span></h1>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </Background>        
      </div>
    </>
  )
}


export default MovieDetails