/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LIST_URL } from '../data/Url';
import '../css/MoviesList.css'



export const MoviesList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])
  console.log(movies)

  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay" />
          <div className="movie-text">
            <h1>{movie.title}</h1>
          </div>
        </Link>
      ))}
    </section>
  )
}