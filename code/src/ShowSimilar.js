import React, { useEffect, useState } from 'react'
import { useParams, NavLink, Link } from 'react-router-dom'

export const ShowSimilar = () => {
  const { id } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=0ba76df6e948cef09d2c33de2fa27368&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      }, [id])
  })

  return (
    <section>

    <section className="back-popular-movies">
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white'}}>
        Back to popular movies
      </NavLink>
    </section>

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