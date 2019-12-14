import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const apiKey = "77bea6b3bafb30d9ed8c7a03c3e8d404"

export const MovieList = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results) //Set the json.reslut to movies that vi are mapping further down

      })
  }, [])
  return (
    <div>
      {movies.map((movie) => (
        <div className="movieListDetails" key={movie.id}>
          <img className="movieListPoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <Link to={`movies/${movie.id}`}>
            <h2>{movie.title}</h2>
          </Link>
          <h3>Release: {movie.release_date}</h3>
        </div>

      ))
      }

    </div >
  )
}
