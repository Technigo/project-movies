import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "pages/movielist.css"


export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState("top_rated");


  const api_key = "363444609247127238629594b245e069"


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results) //varför ska man skriva tex. json.results?
        console.log(json)
      })
  }, [category])

  return (
    <div className="container">
      <div className="category-dropdown">
        <label>
          <h3>Choose a list</h3>
          <select className="select-css"
            onChange={event => setCategory(event.target.value)}
            value={category}>
            <option value="top_rated">Top rated movies</option>
            <option value="popular">Most popular movies</option>
            <option value="upcoming">Upcoming movies</option>
            <option value="now_playing">Now playing movies</option>
          </select>
        </label>
      </div>

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
        <footer>
          <p>Technigo Bootcamp 2019 © Linda Isell</p>
        </footer>
      </section>
    </div>
  )
}
