import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import backicon from '../icons/backicon.png'

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState()
  const { id } = useParams()
  
  
  //const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e87ff9a70deb7f8f6f897b1efba6340a&language=en-US`

  useEffect(() => {
    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=e87ff9a70deb7f8f6f897b1efba6340a&language=en-US`)
    .then ((res) => res.json())
    .then ((json) => {setMovieDetails(json)})
    .catch(err => console.error(err))
  }, [id])

  if(movieDetails === undefined) {
    return   <></>
 }

  return (
    <section className="movie-details-page">
      <img className="backdrop-image" src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt={movieDetails.title} />
      <div className="back-container">
        <Link to="/" className="back-link" >
        
          <img className="back-icon" src={backicon} alt='back button' />
          <h3>Movies</h3>
        
        </Link>
        </div>
        <div className="details-wrapper">
          <img className="poster-image" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title} />
            <div className="details">
              <h1 className='details-title'>{movieDetails.title} <span className="rating">{movieDetails.vote_average}/10</span></h1>
              <p className='details-text'>{movieDetails.overview}</p>
            </div>
        </div>
    </section>
  )
}