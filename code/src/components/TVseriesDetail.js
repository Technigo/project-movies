import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const TVseriesDetails = () => {
  const [tvDetails, setTvDetails] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular/${id}api_key=7f5b30559b3d85aec06d3d1a010f4a39&language=en-US`)
      .then((response) => response.json())
      .then((data) => { setTvDetails(data) })
      .catch((error) => alert(error, 'error'))
  }, [id])

  return (
    <div className="movie-card">
      <Link to="/" className="back-button" type="button">
        <p>Back to home page</p>
      </Link>
      <div
        className="background"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${tvDetails.backdrop_path})` }}>
        <h1>{tvDetails.name}</h1>
      </div>
    </div>
  )
}