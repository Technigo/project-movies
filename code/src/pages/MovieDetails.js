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
    <div>
      <Link to={"/"}>
        <h3>Go Back</h3>
      </Link>
      <img className="detail-backdrop" src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} alt={details.title}/>
      <img className="detail-movie-poster" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title}/>
      <h2>{details.title}</h2>
      <h3>{details.tagline}</h3>
      <h3>Genres: {details.genres.map(genre => genre.name).join(", ")}</h3>
      <h3>Rating: {details.vote_average}/10</h3>
      <p>{details.overview}</p>
      
    </div>
  )
}