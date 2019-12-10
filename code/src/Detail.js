import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from './Nav'

export const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ba76df6e948cef09d2c33de2fa27368&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      setMovie(json)
      console.log(json)
    })
  }, [id])

  return (
    <div key={id}>
    <div className="background-container">
      <img
        className="background-image"
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title}
        />
      
      <section className="movie-individual-image-container">
        <section className="nav-bar"><Nav /></section>
        <img 
          className="movie-individual-image"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} 
        />
      </section>

      <section className="movie-individual-info">
        <section className="movie-individual-info-top">
          <h1 className="movie-individual-title">{movie.title}</h1>
          <h2 className="movie-individual-rating">{movie.vote_average} / 10</h2>
        </section>
        <h4 className="movie-individual-overview">{movie.overview}</h4>
      </section>
    </div>
    </div>
  )
}