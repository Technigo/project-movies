import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { mayo } = useParams()
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=541a4fa38d118d1abb311bee0b16d595&language=en-US&page=1/movies/${mayo}`
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => response.json())
      .then(json => setMovie(json.results))
  }, [mayo, MOVIES_URL])

  if (!movie) {
    return <></>
  }

  return (
    <section className="movie-details">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <h3 className="movie-rating">{movie.vote_average}/10</h3>
      <h3 className="movie-summary">{movie.overview}</h3>
      <section className="movie-backdrop">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
      </section>

      {mayo}
    </section>


  )

}