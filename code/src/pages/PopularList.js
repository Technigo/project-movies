import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './popularlist.css'

export const PopularList = () => {
  const [movies, setMovies] = useState([]) //To stoe a list of movies

  //My API key
  const apiKey = "f16bd1845da3bcbe9df17f656b96d33b"

  //useEffect to fecth API data
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => res.json()) //Get the json of movie list
      .then(json => {
        console.log(json.results)
        setMovies(json.results)
      })
  }, [])

  return (

    <section className="popularMoviesWrapper">
      {movies.map((movie) => (
        <article className="popularMovie" key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <img className="popularMoviePoster" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="popularMovieDetails">
              <h1>{movie.title}</h1>
              <h2>Released: {movie.release_date}</h2>
            </div>
          </Link>
        </article>
      ))
      }
    </section >
  )

}