import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([])

  const {id} = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US`)
      .then(res => res.json())
      .then(json => setMovieDetails(json))
      .catch(err => console.err(err))
  },[])


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

