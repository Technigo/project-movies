/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Seasons = () => {
  const [season, setSeason] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=124871c87c46d6e667f133342d66de5c&language=en-US`)
      .then((res) => res.json())
      .then((data) => setSeason(data.seasons))
      .catch((error) => alert(error, 'error'))
  }, [id])

  return (
    <section className='tvshow-details'>
      <div className='collections'>
        <h1>{season.name}</h1>
        {season.map((show) => {
          return (
            <>
              <img src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt={show.title} />
              <h1
                key={show.title}
                className='list-element'>{show.name}
              </h1>
              <p key={show.id}>Episodes: {show.episode_count}</p>
            </>
          )
        })}
      </div>
    </section>

  )
}
