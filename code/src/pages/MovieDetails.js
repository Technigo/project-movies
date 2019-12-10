import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import "pages/moviedetails.css"


export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([])
  const { id } = useParams()

  const api_key = "363444609247127238629594b245e069"


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails(json)
        console.log(json)
      })
  }, [id])



  return (
    <section className="movie-details">
      <div className="background-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
        <Link to="/">
          <a className="go-back">Movies</a>
        </Link>
        <div className="movie-summary">
          <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.id} />
          <div className="details">
            <h3>{movieDetails.title}</h3>
            <p>{movieDetails.vote_average}</p>
            <p>{movieDetails.overview}</p>

            <p>{movieDetails.imdb_id}</p>
          </div>
        </div>
      </div>
    </section >

  )
}
