import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import 'Css/Details.css'

export const Details = () => {
  const [movie, setMovie] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0774e20c1c8bfc2f79af713d52e9832d&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [id])

  return (
    <article className="detailPage">
      {movie && (
        <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
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