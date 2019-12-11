import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ReactComponent as Arrow } from "./icons/arrow.svg"
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

    <div className="background" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>

      <div className="back-button">
        <Link to={"/"}>
          <Arrow />
          <p>Movies</p>
        </Link>
      </div>
      <div className="details">
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
        <div className="text-details">
          <h2>{movie.original_title} <span>{movie.vote_average}/10</span></h2>
          <br></br>
          <p>{movie.overview}</p>
        </div>

      </div>
    </div>
  )

}