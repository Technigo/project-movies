import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./css/MovieDetail.css"

const apiKey = "0a7bdc5f7b44e6a5230c95a3dbb9bbbc"

export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
      })
  }, [id])


  return (
    <div className="details" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>

      <h1>{movie.original_title}</h1>
      <br></br>
      <h2>{movie.vote_average}/10</h2>
      <br></br>
      <p>{movie.overview}</p>

    </div>
  )

}