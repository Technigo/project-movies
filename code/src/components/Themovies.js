/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';

const Themovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=02c269c6419024906430a5cca2edf53f&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  if (loading) {
    return <h1>hold your poo</h1>
  }
  console.log(movies)

  return (
    <main className="main-page">
      {movies.results.map((movie) => {
        return (
          <a href="https://google.com/" className="image-container" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster" />
          </a>
        )
      })}
    </main>
  )
}

export default Themovies;