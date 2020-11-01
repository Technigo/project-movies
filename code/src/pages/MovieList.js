import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


export const MovieList = () => {

  const[movies,setMovies] = useState([]);

  useEffect(() => {
   fetch('https://api.themoviedb.org/3/movie/popular?api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US&page=1')
   .then((res) => res.json())
   .then((json) => {
     console.log(json.results);
     setMovies(json.results);
   })
  },[])


  return (
    <div className="app-container">
    {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-link">
    

  
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movie-info-container">
        <h2 className="movie-title">{movie.title}</h2>
        <h2 className="movie-release-date">Release date: {movie.release_date}</h2>
        </div>
        
  
 </Link>    
    ))}
    </div>
  )
}