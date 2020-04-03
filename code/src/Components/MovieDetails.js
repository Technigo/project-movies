import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './movieDetails.css'

export const MovieDetails = () => {

  const { movieID } = useParams()
  const [ details, setDetails] = useState([])

  useEffect (() => {
    fetch (`https://api.themoviedb.org/3/movie/${movieID}?api_key=3bb2ad59c76c83daa1fd97f0b4effa78&language=en-US`)
      .then ((res) => res.json())
      .then ((json) => {
        setDetails(json)
        
      })
  }, [movieID])
  
  return (
    <article className="detailsWrapper">
      <img className="imgBackground" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt="details.title"/>
      <img className="imgPoster" src={`https://image.tmdb.org/t/p/w185${details.poster_path}`} alt="details.title"/>
      <h1>
        {details.tagline}
      </h1>
      <p>{details.overview}</p>
    </article> 
  )
}
