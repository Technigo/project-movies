import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { id } = useParams()
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=40162efa089492073c3b7dbba9617e0b&language=en-US`;
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetch(DETAILS_URL)
    .then(response => response.json())
    .then(json => setMovieDetails(json))
  }, [id]);

  return(
    <> 
      <div className="movie-detail-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
        <img className="movie-detail-image" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title}></img>
        <div className="detail-text-container">
          <span className="title-headings">
            <h1 className="movie-detail-title">{movieDetails.title}</h1>
            <p className="movie-rating">{movieDetails.vote_average}/10</p>
          </span>
          <p className="movie-overview">{movieDetails.overview}</p>
        </div>
      </div>
    </>
  )
}