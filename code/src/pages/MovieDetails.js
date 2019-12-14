import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




export const MovieDetails = () => {
  const apiKey = "77bea6b3bafb30d9ed8c7a03c3e8d404"
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)

      })
  }, [id])

  if (!movie.id) {
    return (
      <section className="notFound">
        <h1>Movie not found</h1>
        <Link to="/">
          <h2><i className="fas fa-chevron-circle-left" /> Back to list with movies</h2>
        </Link>
      </section >
    )
  }

  return (
    <section className="movieWrapper" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <Link to="/">
        <div className="backToList"><i className="fas fa-chevron-circle-left" /> Back to Movies</div>
      </Link>
      <section className="movieSummary">
        <img className="moviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movieInfo">
          <h1>{movie.title} <span className="voting">{movie.vote_average}/10</span></h1>
          <p>{movie.overview}</p>
        </div>
      </section>
    </section >
  )

}