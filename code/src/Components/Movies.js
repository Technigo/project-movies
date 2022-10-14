import React from 'react';
import { Link } from 'react-router-dom' // importing for usage
// import { useParams } from 'react-router-dom';

const Movies = ({ movies, downPage, upPage }) => {
  return (
    <section className="list-wrapper">
      {movies.map((movie) => (
        <div className="movie-info">
        <Link
          className="movie-container"
          key={movie.id}
          to={`/MovieDetails/${movie.id}`}>         
            <img
              className="list-element"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title} />
            <div className="list-element-overlay">
            <h1>{movie.title}</h1>
            <h4>Released {movie.release_date}</h4>
          </div>
          </div>
        </Link>
      ))}
      <div className="buttons">
        <button className="up" type="button" onClick={upPage}>Page up!</button>
        <button type="button" onClick={downPage}>Page down!</button>
      </div>
    </section>
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' // importing for usage
// import { useParams } from 'react-router-dom';

export const Movies = () => {
  const [fetchMovies, setFetchMovies] = useState([]) // default state for picking up data

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=db7243cd4866f0f7a8a865282262f6fd&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setFetchMovies(data.results))
      .catch((error) => console.error(error))
  }, []) // square bracket meaning for only when mounting

  return (
    <nav>
      <Link className="home-page text-red-800 pl-3" to="/movielist"> I AM A LINK PRESS ME/ Home page</Link>
    </nav>
  )
}
export default Movies;