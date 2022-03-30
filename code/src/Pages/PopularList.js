import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const PopularList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ec7efa21217def88014fde963c7b7190&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className="movie-container">
      {movies.map((results) => (
        <Link key={results.id} to={`/movies/${results.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${results.poster_path}`} alt="poster" />
          <div className="cover-text">
            <h1>{results.original_title}</h1>
            <h3>Released {results.release_date}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}