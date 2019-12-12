import React, { useEffect, useState } from 'react'
import { Link, useParams, Route } from 'react-router-dom'

export const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fac0e6041f4464409ca2dd71e7e9d33c&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1> Loading page</h1>
  }

  if (!movie) {
    return <h1>No movie found</h1>
  }

  return (
    <div>
      <header>
        <Route path="/">
          <Link to="/">
            Back to Movie's in a List
        </Link>
        </Route>
      </header>
      <div>
        {movie && <div>{movie.title}</div>}
        {movie && <div>{movie.overview}</div>}
        {movie && <div>{movie.vote_average}/10</div>}
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Movie Poster" />
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie Poster" />
      </div>
    </div>
  )
}