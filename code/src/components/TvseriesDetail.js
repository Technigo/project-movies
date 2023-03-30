
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TV_SERIES_DETAILS_URL } from 'utils/urls';

export const TvseriesDetails = () => {
  const [details, setDetails] = useState([])
  const navigate = useNavigate();
  const { id } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(TV_SERIES_DETAILS_URL(id))
      .then((response) => response.json())
      .then((data) => setDetails(data))
  }, [id])
  return (
    <div
      className="tvDetailsWrapper"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%),url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>

      <button className="backToListBtn" type="button" onClick={onBackButtonClick}>Go Back</button>

      <div className="tv-details-container">
        <div className="tv-poster">
          <img className="detailImg" src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt="profile" />
        </div>
        <div className="tv-title">
          <h2>{details.title}</h2>
          <div className="tv-rating">
            <span>{(Math.round(details.vote_average * 10) / 10)}⭐</span>
          </div>
          <div className="tv-summary">
            <p>{details.overview}</p>
          </div>
        </div>
      </div>

    </div>
  )
}