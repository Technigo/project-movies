import React, { useState, useEffect } from 'react'
import { TVSHOW_URL } from 'utils/Urls'
import { Link, useParams } from 'react-router-dom'

export const TVseriesDetails = () => {
  const [tvShow, setTVshow] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(TVSHOW_URL(id))
      .then((response) => response.json())
      .then((data) => { setTVshow(data) })
      .catch((error) => alert(error, 'error'))
  }, [id])

  return (
    <div className="movie-card">
      <Link to="/" className="back-button" type="button">
        <p>Back to home page</p>
      </Link>
      <div
        className="background"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${tvShow.backdrop_path})` }}>
        <h1>{tvShow.name}</h1>
      </div>
    </div>
  )
}