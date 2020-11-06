import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import "components.css/movieDetails.css"

//fetch according to movie id 
//this is the page that shows one movie with its details


export const MovieDetails = () => {
  const {id} = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  
  const getMovieDetails = (movieId) => {
    const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=636ed5609cbdb1c9a92992698d99fea5`;
    fetch(MOVIE_DETAILS_URL)
      .then(response => response.json())
      .then(json => {
        setMovieDetails(json)
      })
  }

  useEffect (()=> {
    getMovieDetails(id)
  },[id]);  
console.log(movieDetails);
  // const movieMatch = movieDetails.find(detail => detail.id = id)
  // if(!movieMatch) {
  //   return (
  //   <div>Not found</div>
  //   )
  // }

  return(
    <article className="movie-details"> 
      <div className="movie-details-background">
        <img className="movie-details-backdrop-image" src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt={movieDetails.title}/>
        <div className="movie-details-container">
          <img className="movie-details-poster" src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt={movieDetails.title}/>
          <div className="movie-details-information">
            <h1>{movieDetails.title}
            <span className="vote-red">{movieDetails.vote_average}</span></h1>
            <p className="movie-details-overview">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </article>
)
}