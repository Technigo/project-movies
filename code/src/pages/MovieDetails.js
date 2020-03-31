import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const MovieDetails = () => {

  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const imgBaseUrl = 'https://image.tmdb.org/t/p'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovieDetails(json))
  }, [movieId])

  return (

    <section className="movie-details" style={{
      backgroundImage: `url(${imgBaseUrl}/w1280/${movieDetails.backdrop_path})`
    }}>
      <Link to={'/'} className="back-btn">Movies</Link>

      <div className="container">
        <div className="movie-details-img">
          <img src={`${imgBaseUrl}/w342/${movieDetails.poster_path}`} alt={`${movieDetails.title} Poster`} ></img>
        </div>
        <article className="movie-details-info">
          <h1>{movieDetails.title}</h1>
          <span className="rating">–– {movieDetails.vote_average}</span>
          <p>{movieDetails.overview}</p>
        </article>
      </div>
    </section >

  )
}