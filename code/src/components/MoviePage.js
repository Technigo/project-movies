import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MOVIE_DETAILS_URL } from 'reusable/Urls'
import { ButtonBack } from './ButtonBack'

export const MoviePage = () => {
 
  const [movie, setMovie] = useState([])
  const { id } = useParams()

 useEffect(() => {
   fetch( MOVIE_DETAILS_URL (id))
   .then ((res) => res.json())
   .then((json) => setMovie(json))
   .catch((error) => console.log('Request failed', error))
 }, [id])


 console.log(MOVIE_DETAILS_URL(id))


 return (
  <>
    <div className='movie-bg-img'
      style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 100%), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`}}>
      <ButtonBack />
        <div className='movie-page-box'>
          <img className='movie-page-poster'src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title}/> 
          <div className='movie-page-text'>
            <h2>{movie.title} <span className='rating'>{`${movie.vote_average} /10`}</span></h2>
            <p>{movie.overview}</p>
          </div>
        </div>
    </div>
   

  </>
 )
}
