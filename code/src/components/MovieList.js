import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom" 
import { MovieDetails } from 'components/MovieDetails'

export const MovieList = () => {
  const movieUrl = 'https://api.themoviedb.org/3/list/7063718?api_key=18fb720a795c179526f7b480bba674dd'
  const [movies, setMovies] = useState([])

  useEffect(() => {
  fetch(movieUrl)
    .then(response => response.json())
    .then(json => setMovies(json.items))
  }, [])
  return (
    <section className='movie-wrapper'>
      {movies.map((movies) => 
      <div className='movie-title' key={movies.id}> 
      <MovieDetails />
      <h1>{movies.title}</h1>
      </div>
      )}
    </section>
  )
}