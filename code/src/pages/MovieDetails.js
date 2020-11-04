import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  }, []);

  console.log(movieDetails)

  return (
    <article className='detail-page'>
      <div className='background' style={{backgroundImage: `url(${baseUrl}${backdropSize}${movieDetails.backdrop_path})`}}>
        <div className='summary-box'>
          <img src={`${baseUrl}${posterSize}${movieDetails.poster_path}`}/>
          <article className='description'>
          <h1>{movieDetails.original_title}</h1>
          <p>{movieDetails.overview}</p>
          </article>
        </div>
      </div>
    </article>
  )
};