import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from '../components/Dropdown'
import '../style/moviesList.css'

export const MoviesList = () => {
  const [movies, setMovies] = useState([])
  const [genreSelection, setGenreSelection] = useState('878')

  const genreList = (genre) => {
    setGenreSelection(genre)
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ef0fb1aeba7a73c8909c5037c23fc608&language=en-US&sort_by=popularity.desc&with_genres=${genreSelection}&page=1`)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
    })

  }, [genreSelection])

  return (
    <div>
      <div className="header">
      <h1>Escape This World</h1>
      <Dropdown genreList={genreList} />
      </div>
    <div className="movies-list">  
      {movies.map((movie) =>(
        <div key={movie.id} className="movie-card" >
          <Link to={`/movieInfo/${movie.id}`}>
            <img className="img-hover" src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} />
            <div className="info-on-hover"> <h2>{movie.title}</h2>
              <p>Released {movie.release_date}</p></div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}