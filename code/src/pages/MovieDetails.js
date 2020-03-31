import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
      <img className="background-img" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
      <div className="movie-information">
        <Route path="/movies">
          <Link to="/">
            <h2>back to all movies</h2>
          </Link>
        </Route>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <p>{movie.vote_average}/10</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}