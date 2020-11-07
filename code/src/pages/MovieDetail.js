/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
  const { id } = useParams()
  const [info, setInfo] = useState([])

  useEffect(() => {
    const APIKey = 'c03059469ca2a2b2651ea90d6f8361ab'
    const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`

    fetch(movieAPI)
      .then((res) => res.json())
      .then((json) => {
        setInfo(json)
      })
  }, [id])

  return (
    <section
      className="info-container"
      key={id}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) -10%, rgb(0, 0, 0) 50%), url(https://image.tmdb.org/t/p/w1280/${info.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div>
        <img className="poster" alt={info.title} src={`https://image.tmdb.org/t/p/w342/${info.poster_path}`} />
        <h3>{info.title} - {info.vote_average}/10</h3>
        <p>{info.overview}</p>
        {info.runtime}
        {info.status} | {info.release_date}
        {info.tagline}
        {info.homepage}

      </div>
    </section>
  )
}