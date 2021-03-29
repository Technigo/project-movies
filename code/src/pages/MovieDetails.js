import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

/* import { MOVIE_URL } from 'reusables/urls' */
const API_KEY = 'e90c1322becf61268c0c0fea570c7099';

export const MovieDetails = () => {
  const {title} = useParams();
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1${title}`)
    .then((res) => res.json())
    .then((json) => {
        setMovie(json.results)
    })
    .catch(err => console.error(err))
}, [title])

  return (
    <section>
        {movie.map((details) => (
      <div key ={details.title}>
      <h2>{details.title}</h2>
      <h3>{details.vote_average}</h3>
      <p>{details.overview}</p>
      </div>
        ))}
    </section>

  )
}