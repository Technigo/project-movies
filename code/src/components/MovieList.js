import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./MovieList.css"

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=55cd0e0e418083e581aec6766c6a1677&language=en-US&page=1')
        .then((res) => res.json())
        .then((json) => {
          console.log(json.results)
            setMovies(json.results)
        })
}, [])

  return (

    <section 
      
      className="movieContainer">
            {movies.map((movie) => (

          <div 
            
          className="movieImg" key={movie.id}>

          <Link to={`/movies/${movie.id}`}>

          <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} /*alt={movie.original_title}*/ />
          <div 
            
            className="Movie-Title">
            <h1>{movie.original_title}</h1>
            <h1>Released {movie.release_date}</h1>
          </div>
          </Link>


          </div>
                
            ))}
        </section>
  )
}