import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import './moviedetail_style.css'
import { BackButton } from 'components/BackButton'


export const MovieDetails = () => {
  
  const { movieId } = useParams()
  const api_key = "4e2114a81de8aa1d1db942cbcc0d3021"
  const API_LINK_DETAILS = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
    // SAVE MOVIE INFO:
  const [movie, setMovie] = useState([])

  // const [error, setError] = useState(false)
  
  useEffect(() => {
    // fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
    fetch(API_LINK_DETAILS)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
        
      })
  }, [API_LINK_DETAILS])

    

  return (
    <main>

      <div className="movie-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`}}>
        <BackButton />
        <article className="movie-card">
          <img className="movie-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
          <div className="movie-info-on-card">
            {/* <p>Movie details</p>  */}
            <h1>{movie.title} <span className="vote-number">{movie.vote_average}/10</span></h1> 
            <p>{movie.overview}</p> 
          </div>
        </article>
      </div>
    </main>
  )
  
}

