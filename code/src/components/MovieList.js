import React, { useEffect, useState } from 'react'
import { MOVIES_URL } from 'utils/Urls'
import { Movies } from 'components/Movies'

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
      {list.map((movies) => (
        <div
          className="movie-card">
          <Movies
            title={movies.title}
            releaseDate={movies.release_date}
            movieID={movies.id}
            poster={movies.poster_path} />
        </div>
      ))}
    </main>
  )
}