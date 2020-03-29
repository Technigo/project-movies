import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const FilmInfo = () => {
  const {filmId} = useParams()
  const [movies, setMovies] =useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=095b0eff24360a92b50f50bfecf730fb`)
    .then ((res) => res.json())
    .then ((json) => {
      setMovies(json)
    })
  }, [filmId])

  return (
    <div>
    
    </div>
  )
}