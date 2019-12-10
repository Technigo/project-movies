import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "pages/movielist.css"


export const MovieList = () => {
  const [movies, setMovies] = useState([])

  const api_key = "363444609247127238629594b245e069"


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results) //varför ska man skriva tex. json.results?
        console.log(json)
      })
  }, [])

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id} />
          <div className="hover-details">
            <h1>{movie.original_title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}
