/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [movieDetailList, setMovieDetailList] = useState([])
  const { id } = useParams() // preferred version
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1fb7c899a961ca96f61b53e4424dcf8e&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetailList(data))
  }, [id])

  const goBack = () => {
    navigate(-1) // to go back to previous page
  }
  return (
    <>
      {movieDetailList && (
        <div
          className="background">
          <p> {movieDetailList.title}</p>
          <p>⭐{movieDetailList.vote_average}</p>
          <p>{movieDetailList.overview}</p>
          <img className="details-img" src={`http://image.tmdb.org/t/p/w342${movieDetailList.poster_path}`} alt="poster" />
          <button type="button" onClick={goBack}>Go back</button>
        </div>
      )}
    </>
  )
}

export default MovieDetails