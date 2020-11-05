import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import "components.css/movieDetails.css"

//fetch according to id 
//this is the page that shows one movie


export const MovieDetails = () => {
  const {id} = useParams();
    console.log(id);

  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=636ed5609cbdb1c9a92992698d99fea5`;
  const [movieDetails, setMovieDetails] = useState({});


  const getMovieDetails = () => {
    fetch(MOVIE_DETAILS_URL)
      .then(response => response.json())
      .then(json => {
        setMovieDetails(json)
      })
  }
   useEffect (()=> {
    getMovieDetails()
  },[id]);  

console.log(setMovieDetails);

return(
<article className="movie-details"> 
  <div className="movie-details-background">
    <img className="movie-details-backdrop-image" src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt={movieDetails.title}/>
  <div className="movie-details-container">
    <img className="movie-details-poster" src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt={movieDetails.title}/>
    <div className="movie-details-information">
      <h1>{movieDetails.title}</h1>
      <p className="movie-details-vote">{movieDetails.vote_average}</p>
      <p className="movie-details-overview">{movieDetails.overview}</p>
    </div>
  </div>
  </div>
</article>
)
}