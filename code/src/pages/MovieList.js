import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'pages/movie-list.css'


export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b2d2d0205b4ac1ee806c10f3c7abcb87&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results)
        setMovies(json.results)
      })
  }, [])

  return (
    <section className='moviesWrapper'>
      {movies.map((movie) => (
        <div className='movieWrapper' key={movie.id}>
          <Link className='movieLink' to={`/movie/${movie.id}`}>
            <img className='movieImage' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.original_title} />
            <div className='titleDate' >
              <h2>{movie.title}</h2>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))
      }
    </section>
  )
}