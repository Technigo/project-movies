import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/urls'

const MovieList = () => {
  const [movies, setMovies] = useState([])

useEffect(() => {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => setMovies(data.results))
    
}, []) 
  
  return (
    <section>
    {movies.map((movies) => ( 
    <div key ={movies.id}>{movies.title}</div>  
    ))}
    </section>
  )
}

export default MovieList