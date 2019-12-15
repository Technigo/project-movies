
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'Css/Popular.css'


export const Popular = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0774e20c1c8bfc2f79af713d52e9832d&language=en-US&page=1')
    .then((res)=>res.json())
    .then((json)=> {
      setMovies(json.results)
    })
  },[])
  
  return (
    <div className="popularPage">
      {movies.map((movie)=>(
      <Link key={movie.id} to={`/movies/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <p>Released {movie.release_date}</p>
        </div>
      </Link>
      ))}
    </div>
  )
}