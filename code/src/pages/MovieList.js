import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'pages/movielist.css'

const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=3d60d24f587752713f5e7b71902de8f8&language=en-US&page=1'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIES_API)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className="moviesWrapper">
      {movies.map((movie) => (
        <div className="movieWrapper" key={movie.id}>
          <Link className="movieLink" to={`/movies/${movie.id}`}>
            <img className="movieImage" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={"movie.original_title"} />
            <div className="titleDate"> <h1>{movie.original_title}</h1>
              <p>Released {movie.release_date}</p></div>
          </Link>
        </div>
      ))
      }
    </div >
  )
}



