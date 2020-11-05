import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API_KEY } from './MovieList'
import { MovieBio } from '../components/MovieBio'


export const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState ([])
  const URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const fetchDetails = () => {
    fetch(URL_MOVIE_DETAILS)
      .then((response) => response.json())
      .then((json) => setMovie(json));
  };
  useEffect(fetchDetails, [id]);

  return (
    <section>
      <img src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} alt={movie.title}/>
      < MovieBio {...movie}
      /> 
    </section>
  )
}