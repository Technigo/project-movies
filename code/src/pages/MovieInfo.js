import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Loader from "react-loader-spinner";

import { MOVIE_URL } from '../reusables/urls'

const MovieInfo = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setLoading(true)
    fetch(MOVIE_URL(id))
      .then(response => {
        if (response.ok) {
          return response.json()
        } else throw new Error(response.statusText)
      })
      .then(receivedMovie => {
        setMovie(receivedMovie)
        setLoading(false)
      })
      .catch((error) => {
        alert("Oops, something went wrong! You will be directed to the main page")
        setError(true)
      })
  }, [id])
  useEffect(() => {
    if (error) {
      history.push("/")
    }
  }, [error, history])

  if (loading) {
    return (
      <div className="loading-text">
        <Loader
          className="loader"
          type="ThreeDots"
          color="#ffffff"
          width={100}
          height={100}
        />
      </div>
    )
  } else {
    return (
      <>
        {movie && (
          <div
            className="info-container"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%), url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})` }}
          >
            <div className="summary">
              <img className="info-poster" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
              <div className="details">
                <h1 className="info-title">{movie.title}</h1>
                <p className="info-rating">{movie.vote_average}/10</p>
                <p className="info-overview">{movie.overview}</p>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default MovieInfo

