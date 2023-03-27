import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const [details, setDetails] = useState({})
  const Navigate = useNavigate()
  const { id } = useParams()

  const onBackButtonClick = () => {
    Navigate(-1)
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f8eb3d0941c8cec7118b188a305910c5&language=en-US`)
      .then((data) => data.json())
      .then((configuredData) => setDetails(configuredData))
  }, [id])

  return (
    <section
      className="details-container"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <button className="go-back-btn" type="button" onClick={onBackButtonClick}>Go back</button>
      <img className="poster-img" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="poster" />
      <div className="movie-info">
        <div className="title-and-rating">
          <h1 className="title">{details.title}</h1>
          <p className="rating">⭐️{details.vote_average}</p>
        </div>
        <p className="overview">{details.overview}</p>
      </div>
    </section>
  )
}

export default Details