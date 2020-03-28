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
    <section className="details">
      <div >

        <img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt="movie backdrop" />
      </div>
      <div className="summary">
        <img className="poster-image" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt="movie poster" />
        <div className="summary-text">
          <h2>{details.title}</h2>
          <h3>{details.vote_average}/10</h3>
          <h4>{details.overview}</h4>
        </div>
      </div>
    </section>

  )
}