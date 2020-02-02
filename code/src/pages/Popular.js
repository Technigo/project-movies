import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'components/Header/Header'
import './Popular.css'

export const Popular = () => {
  const [movies, setMovies] = useState([])

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c74671c4a2a33dbd56a07c2540ea5c7c&language=en-US&page=1'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <>
      <Header />
      <div className="popular-page">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="details">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}