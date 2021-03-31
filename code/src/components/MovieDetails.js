import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState() //undefined

  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e20be4c51fce8750763fdb57c2e46728&language=en-US](https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?api_key=%7Bapi_key%7D&language=en-US)` // change to be dynamic

useEffect(() => {
  fetch(MOVIE_DETAILS_URL)
  .then (response => response.json())
  .then (json => setMovie(json))
 }, [MOVIE_DETAILS_URL])

 if (movie === undefined) {
   return <></>
 }
 
  return (
    <section>
      <div className="backdrop-container">
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
      </div>
      <div className="poster-image-container">
      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}/10</p>
      </div>
    </section>
  )
}

