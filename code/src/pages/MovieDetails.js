import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './MovieDetails.css'
import { BackArrow } from 'icons/BackArrow'



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



  return (
    <div className="movieWrapper" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <div className="btn">
        <Link to="/" className="backLink">
          <BackArrow />
          Back Back to Movies
        </Link>
      </div>
      <section className="movieSummary">
        <img className="moviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="Info">
          <h1>{movie.title} <span className="vote">{movie.vote_average}/10</span></h1>
          <p>{movie.overview}</p>
        </div>
      </section>
    </div >
  )

}