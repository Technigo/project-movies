import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  /*created function for fetch instead of having it in useEffect to avoid warning about the useEffect needing data from outside of the scope(api key this time and movies_url this time)*/
  const fetchMovies = () => {
    const API_KEY = `625126cdbe1a2a3d2d941c58292f85ef`
    const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    fetch(MOVIES_URL)
    .then((response) => response.json())
    .then((json) => setMovies(json.results))
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return(

    <section className='movie-list'>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>

          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>

          <div className='movie-info'>
            <h2>{movie.title}</h2>
            <p>
              Released {movie.release_date}
            </p>
          </div>

        </Link>
      ))}
    </section>

  )
}