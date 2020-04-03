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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd">
          </path>
        </svg>
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