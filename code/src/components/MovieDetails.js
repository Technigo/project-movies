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
      {/* <button
        className="go-back-btn"
        type="button"
        onClick={onBackButtonClick}>Go back to list
      </button> */}
      
      <a className="goBackBtn" href="/" onClick={onBackButtonClick}>
        <svg 
          className="goback-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32">
          <path
            d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28V28ZM18.276 12.9427C18.5189 12.6912 18.6533 12.3544 18.6502 12.0048C18.6472 11.6552 18.507 11.3208 18.2598 11.0736C18.0125 10.8264 17.6781 10.6861 17.3285 10.6831C16.9789 10.6801 16.6421 10.8145 16.3907 11.0573L12.3907 15.0573C12.1407 15.3074 12.0003 15.6464 12.0003 16C12.0003 16.3536 12.1407 16.6926 12.3907 16.9427L16.3907 20.9427C16.6421 21.1855 16.9789 21.3199 17.3285 21.3169C17.6781 21.3139 18.0125 21.1736 18.2598 20.9264C18.507 20.6792 18.6472 20.3448 18.6502 19.9952C18.6533 19.6456 18.5189 19.3088 18.276 19.0573L15.2187 16L18.276 12.9427Z"
            fill="black"
            fillRule="evenodd" />
        </svg>
        <p className="back-to-list">Go back to list</p>
      </a>
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

export default MovieDetails;