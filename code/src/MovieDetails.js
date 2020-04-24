import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(undefined)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8470fd181cec36bb64fcc0377f8eb255&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [movieId])

  if (movie === undefined) {
    return (
      <div className="loader">
      </div>
    )
  }

  return (
    <div
      className="movie-details-wrapper"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>

      <Link
        to="/">
        <h2>
          ⬅︎ MOVIES
        </h2>
      </Link>

      <h1>
        {movie.original_title}
      </h1>

      <div className="poster-text-wrapper">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="movieposter" />
        <div className="overview-rating-wrapper">
          <p>
            {movie.overview}
          </p>
          <span>
            <h2>
              Genre:
            </h2>
            {movie.genres.map((genres) => (
              <h2>
                &nbsp;{genres.name}&nbsp;
              </h2>
            ))}
            <h2>
              | Rating: {movie.vote_average}/10 | Released: {movie.release_date}
            </h2>
          </span>
        </div>
      </div>
    </div >
  )
}