/* eslint-disable no-tabs */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
// skickar inte in props här som det är nu
const MovieDetail = () => {
  const [movieDetailList, setMovieDetailList] = useState([])
  const { id } = useParams()
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    // eslint-disable-next-line quotes
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9316509df2a80192a5e837648d693f17&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetailList(json)
      })
  }, [id])

  return (
    <article
      className="movie-page"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetailList.backdrop_path})` }}>
      <div className="go-back">
        <img src="" alt="Go back" />
        <Link to="/">Movies</Link>
      </div>
      <div className="movieDetailInfo">
        <img src={`http://image.tmdb.org/t/p/w342${movieDetailList.poster_path}`} alt={movieDetailList.original_title} />
        <h2>{movieDetailList.original_title} </h2>
        <p><span className="rating">{Number(movieDetailList.vote_average).toFixed(1)}/10</span></p>
        <p>{movieDetailList.overview}</p>
      </div>
    </article>

  )
}

export default MovieDetail;