import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './MovieList.css'

const apiKey = "77bea6b3bafb30d9ed8c7a03c3e8d404"

export const MovieList = () => {

  const [movies, setMovies] = useState([])



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)

      })
  }, [])
  return (
    <div className="movieWrapper">
      {movies.map((movie) => (

        <Link className="movieCardInfo" key={movie.id} to={`/movies/${movie.id}`}>
          <div className="movieText">
            <h2>{movie.title}</h2>
            <h3>Release date: {movie.release_date}</h3>
          </div>
          <img className="movieImg" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie poster" />
        </Link>
      ))}

    </div>
  )
}
