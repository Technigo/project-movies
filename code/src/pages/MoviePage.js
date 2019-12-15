import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./MoviePage.css"

export const MoviePage = () => {
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState("popular")

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=2afda563012307ae2aead8ab351056e0&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [category])

  console.log(movies)

  return (

    <div>
      <h4>Select Category:</h4>
      <select className="drop-down" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="now_playing">Now playing</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>

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
    </div>
  )


}