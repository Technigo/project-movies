import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=01c5831a9741275652de4ceff9c6e22f&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setDetails(json)
      })
  }, [movieId])

  return (
    <div>
      <div
        className="background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`
        }}
      >
        <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.original_title} />
        <h2>{details.original_title}</h2>
        <h3>{details.vote_average}/10</h3>
        <p>{details.overview}</p>
      </div>
    </div>
  )
}