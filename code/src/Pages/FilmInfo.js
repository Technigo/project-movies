import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
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

  const detailStyle= {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("http://image.tmdb.org/t/p/w1280${movies.backdrop_path}")`
  }
  
  return (
  
    <div className="movie" style={detailStyle}>
      <Link to={`/`}>
      <a href="#" class="previous round">&#8249;</a>
      </Link>
  

      <div key={movies.id} className="summary">
        <img className="poster" src={`http://image.tmdb.org/t/p/w300${movies.poster_path}`} alt={movies.original_title} />
        <p><h2>{movies.original_title}</h2>
        {movies.overview}</p>
        </div>
    </div>
  )
}