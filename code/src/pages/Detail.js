import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




const Detail = () => {
const [movie, setMovie] = useState ()
const { id } = useParams()

useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=%7Bapi_key%7D&language=en-US`)
    .then ((res) => res.json())
    .then ((json) =>
    setMovie(json)
    
)

}, [id])
  
  return (
      <article>
       <div>
       <h1>{movie.title}</h1>
       </div>
    </article>
   
    )
}

export default Detail 