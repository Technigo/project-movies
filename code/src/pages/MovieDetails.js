import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { DETAIL_API, BACKDROP_PATH, POSTER_PATH } from '../reusables/urls'

import { BackButton } from '../components/BackButton'

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetch(DETAIL_API(id))
      .then(res => res.json())
      .then(json => setMovieDetails(json))
  },[id])

  return (
    <>
      <BackButton />
      {movieDetails.length !== 0 && ( 
        <>
         <div className="backdrop-image" style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(${BACKDROP_PATH(movieDetails.backdrop_path)})`}}></div>
          <div className="summary">
            <img className="poster-image" src={POSTER_PATH(movieDetails.poster_path)} alt={movieDetails.title} />
            <div className="details">
              <h3>{movieDetails.title} <span className="rating">{`${movieDetails.vote_average}/10`}</span></h3>
              <p className="movie-info">{movieDetails.overview}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

