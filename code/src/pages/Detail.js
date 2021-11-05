import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BackIcon } from './Icon/Back'




const Detail = () => {
const [movie, setMovie] = useState ()
const { id } = useParams()

useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=%7Bapi_key%7D&language=en-US`)
    .then ((res) => res.json())
    .then ((json) =>
    setMovie(json)
    
)

}, [id])
  

return (
  <article className="detailPage">
    <Link to="/" className="backLink">
      <BackIcon /> Movies
    </Link>
    {movie && (
        <div className="summary">
        <Link to={`"/movies/${movie.id}"`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          </Link>
          <div className="details">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
    )}
  </article>
)
}


export default Detail 