import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const PopularList = () => {
  const [movies, setMovies] = useState([])
  const [movieList, setMovieList] = useState("popular")

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieList}?api_key=0ba76df6e948cef09d2c33de2fa27368&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      }, [movieList])
  })

  return (
    <section>
    
    <label>
    <select
      onChange={event => setMovieList(event.target.value)}
      value={movieList}
    >
      <option value="popular">Popular movies</option>
      <option value="upcoming">Upcoming movies</option>
      <option value="top_rated">Top rated movies</option>
    </select>
    </label>
   
    <section className="movies-list">
      {movies.map((movie) => (
        <div 
          className="movie-poster"
          key={movie.id}
        >
          <Link to={`/movies/${movie.id}`}>
          <img 
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} 
          />
          </Link>
          <h2 className="movie-title">{movie.title}</h2>
          <h3 className="release-date">Released {movie.release_date}</h3>
        </div>
      ))}
    </section>

    </section>
  )
}