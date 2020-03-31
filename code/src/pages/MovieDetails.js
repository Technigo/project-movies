import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=df891c50a8dd83e3e3bb1b5bb74c3699&language=en-US`)
      .then(res => res.json())
      .then(json => {
        setMovie(json)
      })
  }, [movieId])

  return (
    <section>
      <article key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="text-container">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </article>
    </section>
  )
}

