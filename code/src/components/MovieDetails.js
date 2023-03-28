/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOVIE_DETAILS } from 'utils/urls';

const MovieDetails = () => {
  const navigate = useNavigate();
  //   const params = useParams();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  // this { pokemonName } above can be switched to the movie details
  const onBackButtonClick = () => {
    navigate(-1)
  }
  const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  }

  useEffect(() => {
    fetch(MOVIE_DETAILS)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log('params', params);
    console.log('movieDetails', MovieDetails);
  }, [movieId]);
  
  return (
    <section
      className="movie-details-containter"
      style={{ backgroundImage:
      `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <button
        className="go-back-btn"
        type="button"
        onClick={onBackButtonClick}>Go back
      </button>
      <img
        className="poster-img"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt="poster" />
      <div
        className="movie-info">
        <div className="title-and-rating">
          <h1 className="title">{movie.title}</h1>
          <p className="rating">⭐️{movie.vote_average}</p>
        </div>
        <p className="overview">{movie.overview}</p>
        <button type="button" onClick={onGoToNotFoundButtonClick}>
          Go to NotFound
        </button>
        {/* eventually we might delete this button above */}
      </div>
    </section>
  )
}

export default MovieDetails;