import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './DetailPage.css'

export const DetailPage = () => {
  const api_key = 'dcb0caab506cac37c3f7dc479ca8aee2'
  const { movieId } = useParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setDetails(json)
      })
  }, [movieId])
  return (
    <article className="detail-page-container">
      <Link className="home-button" to="/">
        <i class="fas fa-chevron-circle-left"></i> <p className="home">Movies</p>
      </Link>
      <div className="backdrop-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
        <div className="movie-overview">
          <img className="poster" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.poster_path} />

          <div className="movie-summary">
            <h2>{details.title} <span className="vote">{details.vote_average}/10</span></h2>
            <p>{details.overview}</p>
          </div>
        </div>

      </div>
    </article >



  )
}

/*

*/