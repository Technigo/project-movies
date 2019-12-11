import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./moviedetail.css"


export const MovieDetail = () => {
  const [movie, setMovie] = useState({})
  const { movieId } = useParams()
  console.log(movieId)
  const APIKEY = '72df873fd7965d1098248531e4dddca6'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
      })
  }, [])

  const movieDetailStyle = {
    backgroundImage: `url("http://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  }

  return (
    <div>

      <article className="movie-detail" style={movieDetailStyle} >
        <div className="shading">
          <div className="summary">

            <div className="return">back</div>

            <div className="wrapper">
              <div className="movie-poster">
                <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} />
              </div>
              <div className="movie-overview">
                <h3>{movie.title} <span className="rating">{movie.vote_average}/10</span></h3>
                {movie.overview}
              </div>
            </div>

          </div>
        </div>

      </article>

    </div >
  )

} 