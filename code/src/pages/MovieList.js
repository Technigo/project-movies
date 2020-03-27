import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'
import { MovieCardDetails } from 'components/MovieCardDetails'
import { Nav } from 'components/Nav'



export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [movieList, setMovieList] = useState('now_playing')
  const selectMovieList = selectedList => {
    setMovieList(selectedList)
  }
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/movie/${movieList}?api_key=${apiKey}&region=SE`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  })

  return (
    <>
      <Nav
        selectMovieList={selectMovieList} />
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