import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./popularlist.css"


export const PopularList = () => {
  const [movies, setMovies] = useState([])

  const APIKEY = '72df873fd7965d1098248531e4dddca6'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        console.log(json.results)
      })
  }, [])


  return (

    <main className="popular-movie">

      {movies.map((movie) => (

        <Link className="popular-movie-detail" key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          <div className="details">
            <h2> {movie.title} </h2>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))
      }

    </main>
  )

} 