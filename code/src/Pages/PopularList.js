import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './PopularList.css'

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
    
    <div className="box">{movies.map((movie)=> (
      <div class="container">
      <div key={movie.id}>
        <Link to ={`/films/${movie.id}`}>
        <img className="image" src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}  />
        </Link>
        <div className="middle">
        <div className="text"><h1>{movie.original_title}</h1>
        <h2>{movie.release_date}</h2></div> 
        
        </div>
        </div>
        </div>
    ))}
    </div>
  
   
    
  )
}