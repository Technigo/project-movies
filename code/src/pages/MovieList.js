import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'
import { MovieCardDetails } from 'components/MovieCardDetails'
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
      })
  }, [movieList])

  return (
    <>
      <Nav
        selectMovieList={selectMovieList} />

      {loading && <LoadingSpinner />}

      <div className="movie-container">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <article className="movie-card">
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <MovieCardDetails
                title={movie.title}
                release_date={movie.release_date} />
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}