import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './MovieDetails.css'

export const MovieDetails = () => {
    const {id} = useParams();

    const [movieDetails, setMovieDetails] = useState ({});

    const getMovieDetails = (movieId) => {
      const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=2daaca936846f43789b6e1ecfb7b4249`;
      fetch(MOVIE_DETAILS_URL)
        .then(response => response.json())
        .then(json => { setMovieDetails(json)
      })
    }
    
    useEffect (()=> {
      getMovieDetails(id)
    },[id]);  
    
    
    return (
      <article className="movie-details"> 
        <div className="movie-details-background">
          <img className="movie-details-backdrop-image" src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt={movieDetails.title}/>
          <div className="movie-details-container">
            <img className="movie-details-poster" src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt={movieDetails.title}/>
            <div className="movie-details-information">
              <h1 className="title">{movieDetails.title}
              <span className="vote">{movieDetails.vote_average}/10</span></h1>
              <p className="movie-details-overview">{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </article>
  )
}