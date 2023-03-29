import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'utils/key';

const SingleMovie = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.log(error))
  }, [id])

  return (

    <div>

      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Backdrop</p>
      <img src={`http://image.tmdb.org/t/p/w300/${movieDetails.backdrop_path}`} alt="backdrop" />
      <p>Poster</p>
      <img src={`http://image.tmdb.org/t/p/w154/${movieDetails.poster_path}`} alt="poster" />

    </div>
  )
}

export default SingleMovie;