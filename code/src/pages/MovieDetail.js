import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "./movieDetail.css"
import { BackArrow } from "../icons/BackArrow.js"

export const MovieDetail = () => {
  const [movie, setMovie] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const api_key = "9d205e0f5fff6f5614be3be92179fc10"

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        if (json.status_code === 34) {
          setError("movie not found")
        } else {
          setMovie(json)
        }
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1>LOADING</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div
      className='hero'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
      }}
    >
      <div className='movieInfo'>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          style={{ border: "solid white 3px" }}
        />
        <div className='movieDetail'>
          <div className='heading'>
            <h1>{movie.title}</h1>
            <h2>Rating {movie.vote_average}/10</h2>
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

//copy the svg link and paste
//make a folder called icon
//a js-file "backArrow" - paste all code from svg here
//import
//remember that - is not allowed in jsx, so go through the svg text

/* <Link to='/' className='backLink'>
{BackArrow}
</Link>
<h1>{movie.title}</h1> */
