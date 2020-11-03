import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = ({ apiKey, baseUrl, backdropSize }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

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
      <div className='background' style={`background-image: url(`baseUrl + backdropSize + `${movieDetails.backdrop_path})`}>

      </div>

    </article>
  )
}