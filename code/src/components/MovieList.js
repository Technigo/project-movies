import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const MovieList = () => {
  const [list, setList] = useState([])

  const FetchMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=874b455d7037920aea9fd13db8645525&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results)
        console.log(data.results)
      })
  }

  // To run an API request to themoviedb.org and fetch popular films in the US
  useEffect(() => {
    FetchMovies()
  }, [])

  return (
    <main>
      {list.map((movie) => (
        <div className="movie-card">
          <div className="description">
            <h1>{movie.title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
          <Link to={`/movies/${movie.id}`}>
            <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie" />
          </Link>
        </div>

      ))}
    </main>
  )
}
