import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Movie } from "../components/Movie"
import { NotFound } from '../components/NotFound'
import "./movieDetails.css"

export const MovieDetails = (props) => {
  const [error, setError] = useState()
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const { movieId } = useParams()

  // Fetch data from movie database
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1a381f2cdba45c6f12c9451edcfa9c50&language=en-US`)
      .then(response => response.json())
      .then(json => {
        if (json.status_code === 34) {
          setError('Movie not found')
        } else {
          setMovie(json)
        }
        setLoading(false)
      })
  }, [movieId])

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <NotFound />
  }

  return (
    <section className="movie-page">
      {!loading && movie && (
        <Movie
          backdrop={movie.backdrop_path}
          poster={movie.poster_path}
          title={movie.title}
          rating={movie.vote_average}
          overview={movie.overview}>
          <Link to="/" className="return-link">
            Movies
          </Link>
        </Movie>
      )
      }
    </section >
  )
}