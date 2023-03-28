/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOVIE_DETAILS } from 'utils/urls';

const MovieDetails = () => {
  const navigate = useNavigate();
  //   const params = useParams();
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  // this { pokemonName } above can be switched to the movie details
  const onBackButtonClick = () => {
    navigate(-1)
  }
  const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  }

  useEffect(() => {
    fetch(MOVIE_DETAILS)
      .then((data) => data.json())
      .then((configuredData) => setDetails(configuredData))
  }, [movieId]);
  
  return (
    <section
      className="movie-details-containter"
      style={{ backgroundImage:
      `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <button
        className="go-back-btn"
        type="button"
        onClick={onBackButtonClick}>Go back
      </button>
      <img
        className="poster-img"
        src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
        alt="poster" />
      <div
        className="movie-info">
        <div className="title-and-rating">
          <h1 className="title">{details.title}</h1>
          <p className="rating">⭐️{details.vote_average}</p>
          {/* Since toFixed() didn't work, you could use the following:
average={String(Math.round(listItem.vote_average * 10) / 10)} */}
        </div>
        <p className="overview">{details.overview}</p>
        <button type="button" onClick={onGoToNotFoundButtonClick}>
          Go to NotFound
        </button>
        {/* eventually we might delete this button above */}
      </div>
    </section>
  )
}

export default MovieDetails;