import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./FilmInfo.css"

export const FilmInfo = () => {
  const {filmId} = useParams()
  const [movies, setMovies] =useState([])
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=095b0eff24360a92b50f50bfecf730fb`)
    .then ((res) => res.json())
    .then ((json) => {
      setMovies(json)
    })
  }, [filmId])

  if (!movies) {
    return <></>
  }
  

  return (
    <div class>
      <div key={movies.id}>
        <img class="poster" src={`http://image.tmdb.org/t/p/w300${movies.poster_path}`} alt={movies.original_title} />
        <p><h2>{movies.original_title}</h2>
        {movies.overview}</p>

        </div>
   
     
   
    </div>
  )
}