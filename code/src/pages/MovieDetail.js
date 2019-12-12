import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ReactComponent as Arrow } from "../media/arrow5.svg"
import "./css/MovieDetail.css"
import { ErrorPage } from "./ErrorPage"

const apiKey = "0a7bdc5f7b44e6a5230c95a3dbb9bbbc"

export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        setLoading(false)
        console.log(json)
      })

    // .catch(err => {
    //   console.log("is something wrong")
    //   setMovie([])
    //   setLoading(false)
    //   console.log("error found:" + err)
    // })
  }, [id])

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loader"></div>
        <p>Loading movie...</p>
      </div>
    )
  }

  if (!movie.title) {
    return (
      <ErrorPage message={movie.status_message} />
    )
  }

  return (
    <div>
      {movie.title &&
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
              <h2>{movie.title} <span>{movie.vote_average}/10</span></h2>
              <br></br>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )



}

  // export const NoMatch = () => {
  //   return (
  //     <div className="not-found">
  //       Not found
  // </div>
  //   )

  // }