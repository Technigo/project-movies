import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Nav } from './Nav'

export const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ba76df6e948cef09d2c33de2fa27368&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      if(json.status.code === 34) {
        setError("Movie not found")
      } else {
        setMovie(json)
        console.log(json)
      }
      setLoading(false)
    })
  }, [id])

  if(loading) {
    return (
      <div className="loading-message">Movie page is loading...</div>
    )
  }

  if(!movie.title) {
    return (
      <div>{error}</div>
    )
  }
  
  return (
    <div 
      key={id}
      className="background-container"
    > 

      <div className="background-image" 
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), 
        url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}
      />
      
      <section className="movie-individual-image-container">
        <section className="nav-bar">
          <Nav />
        </section>
        <img 
          className="movie-individual-image"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} 
        />
      </section>

        <section className="movie-individual-info-top">
          <h1 className="movie-individual-title">{movie.title}</h1>
          <span className="movie-individual-rating">{movie.vote_average} / 10</span>
        </section>

        <h4 className="movie-individual-overview">{movie.overview}</h4>
        
        <a 
          className="imdb-link" 
          href={`https://www.imdb.com/title/${movie.imdb_id}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          IMDb page
        </a>

        <section className="similar-movies">
          <Link to={`/similar/${movie.id}`} style={{ textDecoration: 'none', color: 'white'}}>
            Show similar movies
          </Link>
        </section>
    </div>
  )
}