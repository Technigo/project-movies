import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const [details, setDetails] = useState([])
  const {movie_id} = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=2fbbfc5b76142a312e36c1069a8f5912&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
        console.log(data)
      })
  }, [movie_id])

return(
  <div>
    <h2>{details.original_title}</h2>
    <h2>{details.overview}</h2>
    <h2>{details.vote_average}</h2>
    <img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt=" small movie poster"/>
    <img src={`https://image.tmdb.org/t/p/w1280${details.poster_path}`} alt="background movie poster"/>
  </div>
)
}