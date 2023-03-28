import React, { useEffect, useState } from 'react'
import { MOVIES_URL } from 'utils/Urls'
import { Movie } from 'components/Movie'

export const MovieList = () => {
  const [list, setList] = useState([])

  const FetchMovies = () => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        setList(data.results)
      })
  }
  useEffect(() => {
    FetchMovies()
  }, [])

  return (
    <main>
      {list.map((movie) => (
        <div
          className="movie-card"
          key={movie.id}>
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