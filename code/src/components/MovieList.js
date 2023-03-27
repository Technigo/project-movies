import React, { useEffect, useState } from 'react';
import { Movie } from './Movies'

export const MovieList = () => {
  const [list, setList] = useState([])

  const FetchMovies = () => {
    fetch('api.themoviedb.org/3/movie/popular?api_key={c78445f7216324dcfc408149681f2fcd}&language=en-US&page=1')
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
