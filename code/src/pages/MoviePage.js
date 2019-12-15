import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./MoviePage.css"

export const MoviePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2afda563012307ae2aead8ab351056e0&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  console.log(movies)

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie" />

          <article className="title">
            <h2>{movie.title}</h2>
            <h3>released {movie.release_date}</h3>
          </article>

        </Link>
      ))
      }
    </div >
  )


}