import React, { useState, useEffect } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import { BackArrow } from 'Icons/BackArrow'

export const MovieDetails = () => {
    const [movie, setMovie] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const history = useHistory()

useEffect (() => {
    fetch(`//api.themoviedb.org/3/movie/${id}?api_key=5f46f973d5f08b9bd274a88659f1c2e6&language=en-US&page=1`)
    .then(res => res.json())
    .then(json => {
      if (json === 34) {
        setError('Movie not found')
        //movie not found
      } else { 
      setMovie(json) 
      } 
      setLoading(false) 
    })
}, [id]) //id is a dependencie


if (loading) {
  return <h1>LOADING</h1>
}

if (error) {
  return <h2>{error}</h2>
}

return ( 
    <article className="detailPage">

      <button onClick={() => history.goBack()} className="backLink">
        <BackArrow />
        Back
      </button>
      
      <div className="backDrop" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.backdrop_path})`}} alt={movie.original_title} />

      <div className="infoBox">
        <img className="infoPoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
        <div className="infoDetails">
          <h2>{movie.title}
            <span className="movieVotes">{movie.vote_average}/10</span>
          </h2>
        <p>{movie.overview}</p>
        </div>
      </div>
    </article>
  )
}