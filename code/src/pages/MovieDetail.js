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
      className="container"
      key={id}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) -70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280/${info.backdrop_path})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <article className="info">
        <img className="poster" alt={info.title} src={`https://image.tmdb.org/t/p/w342/${info.poster_path}`} />

        <div className="details">
          <h3>{info.title}</h3>
          <h4>{info.tagline}</h4>

          <p className="overview">{info.overview}</p>
          <p className="detail">Runtime: {info.runtime} minutes</p>
          <p className="detail">{info.vote_average} / 10</p>
          <p className="detail">Status: {info.status} | Released: {info.release_date}</p>
        </div>
      </article>
    </section>
  )
}