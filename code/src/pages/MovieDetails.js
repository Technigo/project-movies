import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./moviedetails.css"

// In useState initial state is set to 2 object rendered on first mount while page is loading
export const MovieDetails = () => {
  const api_key = "bf1c38c5c54137f389c5c7971de1fe96"
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({ title: "loading...", overview: "loading..." })

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails(json)
      })
  }, [movieId])

  // Another option; if value movieDetails is empty in initial state, 
  // an empty div is rendered while movieDetails is stored with data and rendered
  /*if (movieDetails === undefined) {
    return <div>
    </div>
  }*/

  return (
    <article className="details-page">
      <div className="details-background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
        <div className="details-summary">
          <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title}></img>
          <div className="description">
            <h1>{movieDetails.title} <span className="vote-average">{movieDetails.vote_average}/10</span></h1>
            <p className="overview">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
