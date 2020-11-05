import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
    const [movies, setMovies] = useState([])

const FetchMovies = () => {
    const API = `0cb608022c0a0fbef75881f68133d694`
    const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`
        
    fetch(POPULAR_API)
    .then((response) => response.json())
    .then((json) => setMovies(json.results))
  }

  useEffect(() => {
    FetchMovies()
  }, [])
    
  return (
    <section className='movie-list'>
      {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div>
                <h1>{movie.original_title}</h1>
                <p>{movie.vote_average}<span role="img" aria-label="star emoji"> ⭐︎ </span></p>
              </div>
          </Link>

      ))}
    </section>
)

}












    // useEffect(() => {
    //     fetch()
    //         .then((res) => res.json())
    //         .then((json) => {
    //             //?
    //         })
    // }, [])

   
    