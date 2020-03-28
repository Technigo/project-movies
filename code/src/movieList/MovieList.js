import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const id = "1ff77d3fb46cefb77c7370504c6cb69d"
 
export const MovieList = (props) => {
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState("popular");


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${id}&language=en-US&page=1`)
    .then(res => res.json())
    .then(json => {
        setMovies(json.results)
        console.log("movielist", json.results)
    })

  }, [category])


  

  return (
    <div>
    <select value={category} onChange={e => setCategory(e.target.value)}>
    <option value="popular">Popular</option>
    <option value="top_rated">Top Rated</option>
    <option value="upcoming">Upcoming</option>
  </select>
    <section className = "movieBox">
   
       {movies.map((movie)=>(
         <Link key={movie.id} to={`/movies/${movie.id}`}>
          <article>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
            </article>
          </Link>
         
        )) }
        

    </section>
    </div>


  )
}