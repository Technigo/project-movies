import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import "./css/MovieDetails.css"
import { BackButton } from 'BackButton.js'


export const MovieDetails = ({ title, overview, vote_average, backdrop_path, poster_path, backbutton }) => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})


  useEffect(() => {
    const API_v3_KEY = 'f969c3f19f84733bab447597689e9ea0'
    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_v3_KEY}&language=en-US`

    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then(json => {
        setMovie(json)
      })
  }, [])

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
  const BACKDROP_SIZE = '/w1280'
  const POSTER_SIZE = '/w300'



  return (
    <section className='movie-details'>

      <div className="overlay">
        <img className="background" src={`${IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path}`} alt='backdrop'></img>
      </div>

      <div className="movie-info">
        <img className="poster" src={`${IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}`} alt='poster'></img>

        <div className="details">
          <Link className="back-button" to='/'>
            <BackButton /> Movies
                    </Link>

          <h1>{movie.title} <span className="vote">{movie.vote_average}/10</span></h1>
          <p>{movie.overview}</p>
        </div>
      </div>

    </section>
  )
}