import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  // Why does id need to be in curlies?
  const { id } = useParams()
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=0db2a5ac0c510ce6221cadf605f4d3e6&language=en-US`
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(MOVIE_URL)
      .then(response => response.json())
      // .then(json => console.log(typeof(json)))
      .then(json => setMovie(json))
  }, [])

  const prodCompanies = movie.production_companies
  const backgroundSize = "w1280"
  const posterSize = "w500"
  const backdropURL = `https://image.tmdb.org/t/p/${backgroundSize}${movie.backdrop_path}`
  const posterURL = `https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`

  return (
    <main
      className="movie-details"
      style={{
        backgroundImage: `url('${backdropURL}')`
      }}>
        
      {console.log(prodCompanies)}
      <p>Title: {movie.title}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Production companies: </p>
      <img src={posterURL} alt={`Still image from ${movie.title}`}></img>
    </main>
  )
}