import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const MovieDetails = ( { movieList } ) => {
  console.log(movieList)
  const [movieArray, setMovieArray] = useState(movieList)
  // console.log('testing', movieList[0].id)
  const movieId = useParams()
  const movieMatch = movieArray.find(movie => movie.id === movieId.movienumber)
  console.log('movieMatch', movieMatch)
  console.log('movieId', movieId.movienumber)
  
  return (
    <p>Hello</p>
  )
}