import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './moviedetails.css'


export const MovieDetails = ({style}) => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const backgroundImage = `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
   
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ce155d55b3ce81f17dbaf865fc989515&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovie(json)
      })
  }, [movieId])

  return (
   
      <div>
        <div className="details-container">
        <img src={backgroundImage}/>
        <h1 className='title'>{movie.title}</h1>
      </div>
      </div>
    
  )
  
}
