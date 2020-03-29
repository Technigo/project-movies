import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
export const PopularList = () => {
  const [movies, setMovies] =useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=095b0eff24360a92b50f50bfecf730fb')
    .then((res) => res.json ())
    .then((json) => {
      setMovies(json.results)
    })
  }, [])
  return (
    <div>
      {movies.map((movie) =>(
      <div key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt= {movie.original_title} />
        <Link to={`/films/${movie.id}`}>
        <h2>{movie.original_title}</h2>
        </Link>
        <h3>{movie.release_date}</h3>
      </div>
        

      ))}
     
    </div>
  )
}