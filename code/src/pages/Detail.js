import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from 'components/Navigation/Navigation'
import './Detail.css'

export const Detail = () => {
  const [movie, setMovie] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c911a6ca19197e66eda27f627cd60e15&language=en-US`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('404')
        }
      })
      .then((json) => { setMovie(json) })
      .catch(() => {
        window.location.assign('/404');
      })
  }, [id])

  return (
    <article className="detail">
      <Navigation />
      {movie && (
        <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(123, 3, 5,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="details">
              <h1>{movie.title} <span className="rating">{movie.vote_average}/10</span></h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}

    </article>
  )
}
