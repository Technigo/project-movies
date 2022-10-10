/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Roure} from 'react-router-dom'
// import Movie from './Movie'

const MovieApp = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d96429e32bc0ad6087333ea9da61765c&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => console.log(movieList))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allMovies = movieList.map((movie) => {
    return (
      <div className="movie" key={movie.id}>
        <div className="overlay">
          <h2 className="movie-title movie-text">{movie.original_title}</h2>
          <p className="movie-text">Released {movie.release_date}</p>
        </div>
        <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />
      </div>
    )
  })

  return (
    <section className="movie-wrapper">
      {allMovies}
    </section>

  )
}

export default MovieApp;