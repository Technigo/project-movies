import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BackIcon } from './BackIcon'
import './moviedetails.css'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=01c5831a9741275652de4ceff9c6e22f&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setDetails(json)
        setLoading(false)
      })
  }, [movieId])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!details.id) {
    return (
      <div className='movie-not-found'>
        <h1>Movie not found...</h1>
        <Link to="/" className="back-link">
          <BackIcon /> Back to start
    </Link>
      </div>)

  }

  return (
    <div className='detail-page'>
      <Link to="/" className="back-link">
        <BackIcon /> Movies
      </Link>
      <div
        className="background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`
        }}
      >
        <div className='summary'>
          <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.original_title} />
          <div className='text'>
            <h2>{details.original_title} <span>{details.vote_average}/10</span></h2>
            <div className="genre">
              {details.genres.map((genre) => (
                <p key={genre.name}>{genre.name}</p>
              ))}
            </div>
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}