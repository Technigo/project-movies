import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MOVIE_DETAILS_URL } from 'reusable/Urls'

export const MoviePage = () => {
 
  const [movie, setMovie] = useState([])
  const { id } = useParams()

 useEffect(() => {
   fetch( MOVIE_DETAILS_URL )
   .then ((res) => res.json())
   .then((json) => setMovie(json))
   .catch((error) => console.log('Request failed', error))
 }, [id])


 console.log(movie)

if (movie === undefined) {
  return <> </>
}



 return (

  
   <div>
     {/* <img src='https://image.tmdb.org/t/p/w342//tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg'/> */}
     {/* <img src={`https://image.tmdb.org/t/p/w342${poster_path}`}/> */}
     hej
      <h2>{movie.title}</h2>
   </div>
 )
}
