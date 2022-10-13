import React, { useEffect, useState } from 'react';
import { Movie } from './Movie'

export const MovieList = () => {
  const [list, setList] = useState([])

  const FetchMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=874b455d7037920aea9fd13db8645525&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results)
      })
  }

  // To run an API request to themoviedb.org and fetch popular films in the US
  useEffect(() => {
    FetchMovies()
  }, [])

  return (
    <main>
      {list.map((movie) => (
        <div
          className="movie-card">
          <Movie
            title={movie.title}
            releaseDate={movie.release_date}
            movieId={movie.id}
            poster={movie.poster_path} />
        </div>

      ))}
    </main>
  )
}
