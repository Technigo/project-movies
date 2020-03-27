import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BackLink } from 'components/BackLink'
import './moviedetail.css'


export const MovieDetail = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  const posterUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
      })
  }, [movieId])

  return (
    <div className="movie-backdrop" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0) 20%, rgba(0, 0, 0) 100%), url(${backdropUrl})` }}>
      <div className="movie-detail-wrapper" >
        <Link to="/" className="back-link">
          <BackLink />
          Movies</Link>
        <div className="movie-detail-container">
          <img className="movie-detail-poster" src={posterUrl} alt={movie.title} />
          <div className="movie-summary">
            <h1 className="movie-title">{movie.title} <span className="movie-rating">{movie.vote_average}/10</span></h1>
            <p className="movie-overview">{movie.overview}</p>
          </div>
        </div>
      </div >
    </div >
  )
}