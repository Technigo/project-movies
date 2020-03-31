import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'Style/movie.css'

const Movie_API = 'https://api.themoviedb.org/3/movie/popular?api_key=ab2733ae6909a12384fc457b822942ca&language=en-US&page=1'

export const MoviesList = () => {

const [movies, setMovies] = useState([])

useEffect(() => {

    fetch(Movie_API)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
    })
}, [])

return (
   <div>

      <article className="movieContainer">
       {movies.map((movie) => (
       <Link key={movie.id} to={`/movies/${movie.id}`}>
           <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />

       <div class="movieInfo">    
       <h1>{movie.original_title}</h1>
       <p> Release {movie.release_date}</p>
       </div>
 

       </Link>
       ))}
       </article>

   </div>

)



}