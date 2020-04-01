import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BackIcon } from '../components/BackIcon'
import './MovieDetails.css'


export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a87d34281c8e1e04c49c6b1cfecbf6f0&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [movieId])

  return (
    <div key={movie.id}>
      <div className="background-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }} alt={movie.title}>
        <Route path="/movies">
          <Link to="/" className="back-link">
            <BackIcon />
            <h3>Movies</h3>
          </Link>
        </Route>
        <div className="movie-content">
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          <div className="movie-text">
            <h1>{movie.title}</h1>
            <p>{movie.vote_average}/10</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}