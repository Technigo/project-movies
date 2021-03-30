import React, { useState, useEffect } from 'react'


import { useParams } from 'react-router-dom'
import { MOVIE_DETAILS_URL } from 'reusable/Urls'

export const MoviePage = () => {
 const { movieId } = useParams()

 const [movie, setMovie] = useState([])

 useEffect(() => {
   fetch( MOVIE_DETAILS_URL )
   .then ((res) => res.json())
   .then((json) => setMovie(json))
   .catch((error) => console.log('Request failed', error))
 }, [movieId])

console.log(movie)

 return (
   <div>
     <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
     hej
    
     <h2>{movie.title}</h2>
   </div>
 )
}
