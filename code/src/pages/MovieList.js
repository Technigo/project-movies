import React, { useEffect, useState } from 'react'
import './movielist.css'
import { MovieCard } from 'components/MovieCard'
import { Nav } from 'components/Nav'
import { LoadingSpinner } from 'components/LoadingSpinner'



export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [movieList, setMovieList] = useState(137418)
  const [loading, setLoading] = useState(true)
  const selectMovieList = selectedList => {
    setMovieList(selectedList)
  }
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/4/list/${movieList}?page=1&api_key=${apiKey}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        setLoading(false)
        console.log(json)
      })
  }, [movieList])

  return (
    <>
      <Nav selectMovieList={selectMovieList} />

      {loading && <LoadingSpinner />}

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date} />
        ))}
      </div>
    </>
  )
}