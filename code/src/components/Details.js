import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const { id } = useParams()
  console.log('movie-id:', id)

  const [movieDetails, setMovieDetails] = useState([])

  const FetchDetails = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=874b455d7037920aea9fd13db8645525&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data)
        console.log(data)
      })
  }

  useEffect(() => {
    FetchDetails()
  }, [])

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.vote_average}</p>
      <p>{movieDetails.overview}</p>
      <img src={`http://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt="movie" />
    </div>
  )
}

// title, vote_average, overview, backdrop_path, poster_path
