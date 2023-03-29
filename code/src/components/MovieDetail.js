
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOVIE_DETAILS_URL } from 'utils/urls';

export const MovieDetails = () => {
  const [details, setDetails] = useState([])
  const navigate = useNavigate();
  const { id } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(MOVIE_DETAILS_URL(id))
      .then((response) => response.json())
      .then((data) => setDetails(data.results))
  }, [id])
  // const onGoToNotFoundButtononClick = () => {
  //   navigate('/404')
  // }
  return (
    <div className="movieDetailsWrapper">

      <img className="detailsImg" src={details.backdrop_path} alt="poster" />
      <button className="backToListBtn" type="button" onClick={onBackButtonClick}>Go Back</button>

      <div className="movie-details-container">
        <div className="movie-poster">
          <img src={details.poster_path} alt="profile" />
        </div>
        <div className="movie-title">
          <h2>{details.title}</h2>
          <div className="movie-rating">
            <span>{(Math.round(details.vote_average * 10) / 10)}⭐</span>
          </div>
          <div className="movie-summary">
            <p>{details.overview}</p>
          </div>
        </div>
      </div>

    </div>
  )
}