import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [categories, setCategories] = useState('popular')


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${categories}?api_key=fac0e6041f4464409ca2dd71e7e9d33c&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      })
  }, [categories])

  return (
    <div>
      <nav>
        <h1>Moviepedia</h1>
        <h4>Select movie list:</h4>
        <select value={categories} onChange={(e) => setCategories(e.target.value)}>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </nav>
      <div className="fullPage">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie Poster" />
            <section className="frontInfo">
              <h1>{movie.title}</h1>
              <p>Released at {movie.release_date}</p>
            </section>
          </Link>
        ))}

      </div>
      <footer>
        <a className="madeby" href="mailto:ninamansster@gmail.com"> Fourth React project by Nina Månsson at Technigo Frontend Bootcamp 2019. API from The Movie DB - thanks! Icon from Noon project - thanks!
</a>
      </footer>
    </div>
  )
}