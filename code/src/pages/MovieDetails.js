import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackButton } from '../components/BackButton'



export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState() //undefined
  const [error, setError] = useState(false)


  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e20be4c51fce8750763fdb57c2e46728&language=en-US](https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?api_key=%7Bapi_key%7D&language=en-US)` // change to be dynamic

useEffect(() => {
  fetch(MOVIE_DETAILS_URL)
  .then (response => response.json())
  .then (json => setMovie(json))
  .catch(error => setError(true))
 }, [MOVIE_DETAILS_URL])

 if (movie === undefined) {
   return (
    <></>
   )
 }

//  if else (!error) {
//    return (
//     console.log('we have an error')
//    )
//  }
 
//maybe use ternary expression for error or no error?
  return (
  <>
    <BackButton />
    <section>     
      <div className="backdrop-container" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
      </div>
      <div className="movie-summary">
        <div className="poster-image-container">
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
        </div>
          <div className="summary-text">
            <h1>{movie.title}<span className="movie-rating">{movie.vote_average}/10</span></h1>
            <p>{movie.overview}</p>
          </div>
      </div>      
    </section>
  </>
  )
}



  