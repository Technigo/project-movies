import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "pages/Footer"
import "./css/MovieList.css"

const apiKey = "0a7bdc5f7b44e6a5230c95a3dbb9bbbc"

export const MovieList = ({ category = "popular" }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results)
        setMovies(json.results)

      })
  }, [category])

  return (
    <div>
      <section className="all-movies">
        {movies.map((movie) => (
          <div className="poster" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
              <div className="title-release" key={movie.id}>
                <h1>{movie.title}</h1>
                <p>Released: {movie.release_date}</p>
              </div>
            </Link>
          </div>
        ))
        }
      </section>
      <Footer />
    </div>
  )
}