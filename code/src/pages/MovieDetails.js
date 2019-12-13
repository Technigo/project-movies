import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const { detailId } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${detailId}?api_key=7bad066f3ffa3daf68ae80d43ff12b31&language=en-US`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => { setMovie(json) })
  }, [detailId, url])

  return (
    <div className="bg">
      <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" className="stretch" />
      <div className="theInfo">
        <h2>{movie.original_title}</h2>
        <h3>{movie.overview}</h3>
        <p><a href={movie.homepage}>{movie.homepage}</a></p>
      </div>
      <div className="back"><Link to="/"><span className="fafa"><i className="far fa-arrow-alt-circle-left" /></span>Back to movies</Link></div>
    </div>

  )
}
