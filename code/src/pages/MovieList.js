import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import './movielist_style.css'

export const MovieList = () => {
  
  const api_key = "4e2114a81de8aa1d1db942cbcc0d3021"
  const API_LINK_LIST = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  // const API_LINK_LIST = "https://api.themoviedb.org/3/movie/popular?api_key=4e2114a81de8aa1d1db942cbcc0d3021&language=en-US&page=1"
  // Save a list of movies:
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_LINK_LIST)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])


  return (
    <main>

      <div className="movies-container">
        {movies.map((movie) => (

          <article className="movie-card" key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <div className="movie-card-info">
                <h1 className="movie-title-text">{movie.title}</h1>
                <p>In Theaters: </p>
                <h2>{movie.release_date}</h2> 
                  
              </div>
            </Link>
          </article>

        ))}
      </div>




    </main>

  )

}