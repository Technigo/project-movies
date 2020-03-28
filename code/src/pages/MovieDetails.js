import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieID } = useParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=83328e75221cc6b9f332da9a39a408f8&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setDetails(json)
      })
  }, [movieID])

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} />
      <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
      <h2>{details.title}</h2>
      <h4>{details.vote_average}/10</h4>
      <h3>{details.overview}</h3>
    </div>

  )
}