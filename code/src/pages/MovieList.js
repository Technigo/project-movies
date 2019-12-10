import React, { useEffect, useState } from "react"
import "./css/MovieList.css"

const apiKey = "0a7bdc5f7b44e6a5230c95a3dbb9bbbc"

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results)
        setMovies(json.results)

      })
  }, [])

  return (
    <div className="list">
      {movies.map((movie) => (
        <div className="poster" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
          <p>{movie.title}</p>
        </div>

      ))
      }
    </div >
  )

}