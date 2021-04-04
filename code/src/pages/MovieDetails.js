import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom';
import { DETAILS_URL } from '../reusable/urls'

import { LoadingSpinner } from '../components/LoadingSpinner'

export const MovieDetails = () => {
  const {id} = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch(DETAILS_URL(id))
    .then((response) => response.json())
    .then((json) => setDetails(json));
  }, []);

  if (details === undefined) {
    return <LoadingSpinner/>;
  }

  return (
    <div className="detail-container">
      <Link to={"/"}>
        <div className="back-link"><img src= "/assets/backarrow50px.png" className="back-link-icon" alt="Go back to list of movies" /><h2 className="back-link-text">Movies</h2></div>
      </Link>
      <div className="detail-backdrop-container">
        <img className="detail-backdrop" src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} alt={details.title}/>
      </div>
      <img className="detail-movie-poster" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title}/>
      <div className="detail-info-container">
        <h1 className="detail-title">{details.title}
          <span className="detail-rating">{details.vote_average}/10</span>
        </h1>
        <p className="detail-summary">{details.overview}</p>
      </div>
    </div>
  )
}