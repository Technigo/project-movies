import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import 'styles/movieDetails.css';

export const MovieDetails = ({ apiKey, baseUrl, backdropSize, posterSize }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  useEffect(() => {
    fetch(DETAILS_URL)
    .then(res => res.json())
    .then((json) => {
      setMovieDetails(json)
    })
  }, [DETAILS_URL]);

  return (
    <article className='detail-page'>
      <Link 
        className='back-link' 
        to='/' 
        style={{color: !movieDetails.backdrop_path ? 'black' : 'white'}}
      >
          <img src={require('assets/backbutton.svg')} alt=''/>
          Back to list
      </Link>
      <div className='background' style={{backgroundImage: `url(${baseUrl}${backdropSize}${movieDetails.backdrop_path})`}}>
        <div className='summary-box'>
          <img src={`${baseUrl}${posterSize}${movieDetails.poster_path}`} alt={`${movieDetails.original_title}`}/>
          <article className='description'>
            <h1>{movieDetails.original_title}<span className='rating'>{movieDetails.vote_average}/10</span></h1>
            <p>{movieDetails.overview}</p>
          </article>
        </div>
      </div>
    </article>
  )
};
