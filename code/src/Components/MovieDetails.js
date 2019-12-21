import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { MovieBackground } from './styles'
import backArrow from '../static/backArrow.svg'

const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const hej = useParams()
  const apiKey = "34f303052aebcecccf74022a56b92eee"

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!movie) {
    return <h1>Movie not found!</h1>
  }

  return (
    <MovieBackground path={movie.backdrop_path}>
      <div>
        <Link to={'/'}><div style={{ width: "30px", display: "flex" }}>
          <img src={backArrow} alt="" /><span style={{ marginLeft: "1rem", color: "white" }}>Movies</span></div></Link>
        {/* <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" /> */}
        <h1>{movie.title}</h1>
        <h2>Rating {movie.vote_average}/10</h2>
        <p>{movie.overview}</p>
      </div>
    </MovieBackground>
  )
}

export default MovieDetails