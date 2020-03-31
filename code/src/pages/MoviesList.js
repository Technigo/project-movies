import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./movieslist.css"

// UseState to store a list of Movies
// API request, when page loads, fetch the list and throw into our movies state
export const MoviesList = () => {
  const api_key = "bf1c38c5c54137f389c5c7971de1fe96"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        console.log(json.results)
      })
  }, [])

  // Map over the state and render movie name and release date (image later)
  return (
    <div>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <p>Released: {movie.release_date}</p>
          </div>
        </Link>
      ))
      }
    </div>
  )
}

