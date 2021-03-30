import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { DETAIL_API } from '../reusables/urls'

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetch(DETAIL_API({id}))
      .then(res => res.json())
      .then(json => setMovieDetails(json))
      .catch(err => console.err(err))
  },[setMovieDetails])


  return (
    <>
      <img className="backdrop-image" src={`http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} alt="Backdrop from the film" />
      <div className="summary">
        <img className="poster-image" src={`http://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`} alt={movieDetails.title} />
        <div className="details">
          <h3>{movieDetails.title} <span className="rating">{`${movieDetails.vote_average}/10`}</span></h3>
          <p className="movie-info">{movieDetails.overview}</p>
        </div>
      </div>
    </>
  )
}

