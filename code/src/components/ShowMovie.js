/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ShowMovie = () => {
  const [details, setDetails] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5b17ba21606be74c35e11124051ec659`)
      .then((res) => res.json())
      .then((json) => { setDetails(json) })
      .catch((error) => alert(error, 'error'))
      .finally(() => console.log('movie-details'))
  }, [id])

  const goBack = () => {
    navigate(-1)
  }

  return (
    <section className="details-page">
      <button type="button" className="back-link" onClick={goBack}> Back to movie list </button>
      <img className="solo-movie-poster" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="poster" />
      <h2>{details.title}</h2>
      <p>{details.overview}</p>

    </section>
  )
}

