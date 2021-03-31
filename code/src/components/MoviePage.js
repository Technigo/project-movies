import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MOVIE_DETAILS_URL } from 'reusable/Urls'


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

if (movie === undefined) {
  return <> </>
}



 return (
  <>
    <div className='bg-img'
    style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0) 10%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`}}>
      
    </div>
    <div>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/> 
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}</p>
    </div>

  </>
 )
}
