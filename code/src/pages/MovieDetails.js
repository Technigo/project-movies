import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './moviedetails.css';

export const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e0031d94cffec1ccfe74eefb45815869&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        setLoading(false)
      })
  }, [id]) // We need to pass id as a dependecy here so everytime the id changes, we do a new fetch.

  if (loading) {
    return <h1>LOADING</h1>
  }

  if (!movie) {
    return <h1>no movie</h1>
  }

  return (
    
    <div>
      {/* <div className="background">
        <img src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} alt = "background" />
      </div> */}


      <div className="movie">
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt = "poster" />
        </div>

        <div className="description">

          <div className="title">
          {movie && <div>{movie.title}</div>}
          </div>

          <div className="rate">
          <div>{movie.vote_average}/10</div>
          </div>
          
          <div className="overview">
          <div>{movie.overview}</div>
          </div>

      </div>
    </div>
    </div>
    
    
  )
}
