/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MOVIEDETAILS_URL } from 'utils/urls'

const MovieDetails = () => {
  const [movieDetailList, setMovieDetailList] = useState([])
  const { id } = useParams() // preferred version
  const navigate = useNavigate();

  useEffect(() => {
    fetch(MOVIEDETAILS_URL(id))
      .then((res) => res.json())
      .then((data) => setMovieDetailList(data))
  }, [id])

  const goBack = () => {
    navigate(-1) // to go back to previous page
  }

  return (
    <section className="detail-page">
      <div
        className="background-img"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${movieDetailList.backdrop_path})` }}>
        <button className="go-back-btn" type="button" onClick={goBack}>Go back to movies</button>
        <div className="movie-detail-wrapper">
          <img className="details-img" src={`http://image.tmdb.org/t/p/w342${movieDetailList.poster_path}`} alt={movieDetailList.original_title} />
          <div className="movie-info">
            <div className="title-rate">
              <h2> {movieDetailList.title}</h2>
              <p>⭐ {Number(movieDetailList.vote_average).toFixed(1)} / 10</p>
            </div>
            <p className="detail-text">{movieDetailList.overview}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails

/* <div
className='backdrop'
style={{
  backgroundImage: movieDetails.backdrop_path
    ? `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`
    : '',
}}
> */