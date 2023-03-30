/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { MOVIE_DETAILS } from 'utils/urls';

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  // I changed this from MovieId to only id so that it matches with the second path
  // in app.js. I also changed it in the urls.js and in this file.
  const [details, setDetails] = useState({})

  const onBackButtonClick = () => {
    navigate(-1)
  }
  const notFoundButtonClick = () => {
    navigate('/404')
  }

  // when replacing the MOVIE_DETAILS in the fetch with the actual link, it finally worked
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ef419ef4eccfeb47458eaa6d860708b3&language=en-US`)
      .then((data) => data.json())
      .then((configuredData) => setDetails(configuredData))
  }, [id]);
  
  return (
    <section
      className="movie-details-container"
      style={{ backgroundImage:
      `url(http://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <button
        className="go-back-btn"
        type="button"
        onClick={onBackButtonClick}>Go back
      </button>
      <img
        className="poster-img"
        src={`http://image.tmdb.org/t/p/w342/${details.poster_path}`}
        alt="movie-poster" />
      <div
        className="movie-info">
        <div className="title-and-rating">
          <h1 className="title">{details.title}</h1>
          <p className="rating">⭐️{Math.round(details.vote_average * 10) / 10}</p>
          {/* <p className="rating">⭐️{details.vote_average}</p> */}
          {/* We could use the following to get just one decimal:
        {Math.round(details.vote_average * 10) / 10}/10 */}
        </div>
        <p className="overview">{details.overview}</p>
        <button type="button" onClick={notFoundButtonClick}>
          Go to NotFound
        </button>
        {/* eventually we might delete this button above */}
      </div>
    </section>
  )
}
// Ylva testar commit av branch

export default MovieDetails;