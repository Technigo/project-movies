//api-key: 8470fd181cec36bb64fcc0377f8eb255
//popular movies (replace api-key): https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1
//moviedetails (replace key and id): https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
//different sized img: https://api.themoviedb.org/3/configuration?api_key={api_key}
//example: https://image.tmdb.org/t/p/w1280${movie.backdrop_path}

// ## Requirements 🧪
// - Your app should have at least two pages - one showing a list of movies and one showing details
// - You should follow the design from our example (but it's ok to change things - just try to make it look nice)
// https://technigo-movies-project.netlify.com/

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8470fd181cec36bb64fcc0377f8eb255&language=en-US&page=1')
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
        console.log(json.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="movie-list">
      {movies.map((movie => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})` }}
        >
          <div
            className="movie-container">
            <h1>
              {movie.title}
            </h1>
            <div className="overview-release-wrapper">
              <p>
                {movie.overview}
              </p>
              <h2>
                {movie.vote_average}/10
              </h2>
            </div>
          </div>
        </Link >
      )))}
    </div >
  )
}