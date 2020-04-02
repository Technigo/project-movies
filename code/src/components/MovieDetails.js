import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './moviedetails.css'
import { BackToList } from 'components/BackToList'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  //const backgroundImage = `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ce155d55b3ce81f17dbaf865fc989515&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovie(json)
      })
  }, [movieId])

  return (
    <div className='details-background-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
      <BackToList />
      <article >
        
        
        <div className="details">
         
          <img className="details-mini-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
          <div className="details-container">
            <h1 className='title'>{movie.title}  <span>{movie.vote_average}/10</span></h1>
            <p className="details-overview">{movie.overview}</p>
          </div>
          </div>
        <div className="details-overlay"></div>

      </article>
    </div>

  )

}
