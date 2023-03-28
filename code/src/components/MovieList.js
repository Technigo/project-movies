import React, { useEffect, useState } from 'react'
import { MOVIES_URL } from 'utils/Urls'
import { Movie } from 'components/Movie'

export const MovieList = () => {
  const [list, setList] = useState([])

  const FetchMovies = () => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((data) => {
        setList(data.results)
      })
  }
  // To run an API request to moviedv and fetch popular films
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
            movieID={movie.id}
            poster={movie.poster_path} />
        </div>
      ))}
    </main>
  )
}