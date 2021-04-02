import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom';

import { LoadingSpinner } from '../components/LoadingSpinner'

export const MovieDetails = () => {
  const {id} = useParams();
  const [details, setDetails] = useState();
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e251592f16990230853a7c79c14797f4&language=en-US`

  useEffect(() => {
    fetch(DETAILS_URL)
    .then((response) => response.json())
    .then((json) => setDetails(json));
  }, []);

  if (details === undefined) {
    return <LoadingSpinner/>;
  }
  //return Loading spinner component here

  return (
    <div className="detail-container">
      <Link to={"/"}>
        <div className="back-link"><img src= "/assets/backarrow50px.png" className="back-link-icon" alt="Go back to list of movies" /><h2>Movies</h2></div>
      </Link>
      <img className="detail-backdrop" src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} alt={details.title}/>
      <img className="detail-movie-poster" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title}/>
      <div className="detail-info-container">
        <h1 className="detail-title">{details.title}
        <span className="detail-rating">{details.vote_average}/10</span></h1>
        <p className="detail-summary">{details.overview}</p>
      </div>
    </div>
  )
}