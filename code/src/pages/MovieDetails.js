import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export const MovieDetails = () => {
  const { id } = useParams()
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=541a4fa38d118d1abb311bee0b16d595&language=en-US`
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => {
        console.log(`Status code: ${response.status}`)
        return response.json()
      }
      )
      .then(json => setMovie(json))
  }, [MOVIES_URL, id])

  if (!movie) {
    return <></>
  }

  return (
    <>
      <Link to="/" className="back-to-list">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">...</svg>
        Movies
      </Link>

      <section className="movie-backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="details-box">
            <div className="title-rating">
              <h2>
                {movie.title}
                <span className="movie-rating">{movie.vote_average}/10</span>
              </h2>
            </div>
            <p className="movie-summary">{movie.overview}</p>
          </div>
        </div>
      </section>
    </>
  )
}