import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const id = "1ff77d3fb46cefb77c7370504c6cb69d"
 
export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${id}&language=en-US&page=1`)
    .then(res => res.json())
    .then(json => {
        setMovies(json.results)
        console.log(movies)
    })

  }, [])



  return (

    <section>
       {movies.map((movie)=>(
         <Link key={movie.id} to={`/movies/${movie.id}`}>
          <articl>
            <h2>{movie.title}</h2>
            <img width="200px" height="200px" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
            </articl>
          </Link>
         
        )) }
        

    </section>


  )
}