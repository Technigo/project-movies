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

    <article className="movie-detail" style={movieDetailStyle} >

      <div className="shading">   {/*this is for the Lineal-gradient color on the images */}

        <div className="summary">

          <Link className="back-btn" to={`/`}>
            <svg className="back-btn-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
            <span>Back to movies</span>
          </Link>

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

  )

} 