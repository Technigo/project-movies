
import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./MovieDetails.css"
import { BackArrow } from "icons/BackArrow"

export const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2afda563012307ae2aead8ab351056e0&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        setLoading(false)
      })
  }, [id])

  console.log(movie)

  if (loading) {
    return <h1>Loading, stay tuned!</h1>
  }

  if (!movie) {
    return <h1>Sorry, no such movie</h1>
  }


  return (

    <div className="movie-info">
      <Link to="/" className="back-link">
        <BackArrow />
        Back
        </Link>

      <div className="backdrop-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
        <div className="items">
          <img className="cover-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie" />
          <div className="movie-details">
            <h1>{movie.title} <span className="rating">{`${movie.vote_average}/10`}</span></h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
